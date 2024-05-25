import { LitElement, html, customElement, CSSResult, TemplateResult, css, PropertyDeclarations } from 'lit-element';

import * as packageDetails from '../package.json';

declare global {
  interface Window {
    customCards: {
      type: string;
      name: string;
      description: string;
    }[];
  }
}

console.info(
  `%c  ha-nintendo-switch-card \n%c  ${packageDetails.version}   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'ha-nintendo-switch-card',
  name: 'HA Nintendo Switch Card',
  description: 'A card to show Nintendo Switch integrations',
});

import { format } from 'timeago.js';
import { HAEntityType } from './types';

@customElement('ha-nintendo-switch-card')
class HaNintendoSwitchCard extends LitElement {
  hass;
  config;
  static get properties(): PropertyDeclarations {
    return {
      hass: {},
      config: {},
    };
  }

  render(): TemplateResult {
    return html`
      <ha-card>
        ${this.config.entity
          ? this.createEntityCard(this.hass.states[this.config.entity])
          : this.createEntitiesCard(this.config.entities)}
      </ha-card>
    `;
  }

  setConfig(config): void {
    if (!config.entities && !config.entity) {
      throw new Error('You need to define either a single entity or an entities field');
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize(): number {
    return this.config.entities ? this.config.entities.length + 1 : 2;
  }

  _toggle(state): void {
    this.hass.callService('homeassistant', 'toggle', {
      entity_id: state.entity_id,
    });
  }

  createEntitiesCard(entities): TemplateResult[] {
    if (typeof entities === 'string') {
      const newEntities = [] as string[];

      Object.values(this.hass.states).forEach((entity: any) => {
        if (entity.entity_id.startsWith(entities)) {
          newEntities.push(entity.entity_id);
        }
      });

      entities = newEntities;
    }

    if (this.config.online_only) {
      const newEntities = [] as string[];

      entities.forEach((entity: string) => {
        const entityObj = this.hass.states[entity] as HAEntityType;
        if (
          entityObj &&
          entityObj.attributes.presence.state &&
          entityObj.attributes.presence.state.toLowerCase() !== 'offline'
        ) {
          newEntities.push(entity);
        }
      });

      entities = newEntities;
    }

    return [
      html` <div class="card-header"><div class="name">Nintendo Friends</div></div> `,
      ...entities.map((ent, index) => {
        const entity = this.hass.states[ent] as HAEntityType;
        return entity
          ? html`
              <div
                class="ha-nintendo-switch-multi kb-clickable ${index === entities.length - 1
                  ? 'kb-last'
                  : ''} ${entity.attributes.presence.state.toLowerCase()}"
                @click=${() => this.handlePopup(entity)}
              >
                <div class="ha-nintendo-switch-user">
                  <img src="${entity.attributes.imageUri}" class="ha-nintendo-switch-avatar" />
                  <div class="ha-nintendo-switch-username">${entity.attributes.name}</div>
                </div>
                <div class="ha-nintendo-switch-value">${entity.attributes.presence.game?.name || '-'}</div>
                ${entity.attributes.presence.game && this.config.game_background
                  ? html` <img src="${entity.attributes.presence.game.imageUri}" class="ha-nintendo-switch-game-bg" /> `
                  : ''}
              </div>
            `
          : html` <div class="not-found">Entity ${ent} not found.</div> `;
      }),
    ];
  }

  handlePopup(entity) {
    const entityId = entity.entity_id;
    const e = new Event('hass-more-info', { composed: true }) as any;
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  createEntityCard(entity: HAEntityType): TemplateResult {
    return html`
      <div class="kb-container kb-clickable" @click=${() => this.handlePopup(entity)}>
        <div class="ha-nintendo-switch-username">
          ${this.config.friendly_name ? this.config.friendly_name : entity.attributes.name}
        </div>
        ${this.renderUserAvatar(entity)}
        <div class="ha-nintendo-switch-online-status">${entity.attributes.presence.state}</div>
        <div class="ha-nintendo-switch-last-online">
          <span>
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            ${entity.attributes.presence.state.toLowerCase() === 'online' ? 'Online Since' : 'Last Online'}
          </span>
          <span> ${this.formatLastOnline(entity.attributes.presence.logoutAt)} </span>
        </div>
        ${this.renderCurrentlyPlayingGame(entity)}
      </div>
    `;
  }

  formatLastOnline(lastOnline: number): string {
    return format(new Date(lastOnline));
  }

  renderUserAvatar(entity: HAEntityType): TemplateResult {
    return entity.attributes.imageUri
      ? html` <img src="${entity.attributes.imageUri}" class="ha-nintendo-switch-avatar" /> `
      : html` <ha-icon icon="${entity.attributes.imageUri}" class="ha-nintendo-switch-avatar"></ha-icon> `;
  }

  renderCurrentlyPlayingGame(entity: HAEntityType): TemplateResult {
    const currentlyPlayingGame = entity.attributes.presence.game;

    return currentlyPlayingGame?.name
      ? html`
          <div class="ha-nintendo-switch-now-playing">
            <div class="label">Now Playing</div>
            <div class="game-title">${currentlyPlayingGame.name}</div>
            <img class="game-img" src="${currentlyPlayingGame.imageUri}" />
          </div>
        `
      : html``;
  }

  static get styles(): CSSResult {
    return css`
      /* :host {
      } */

      .card-header {
        width: 100%;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .kb-clickable {
        cursor: pointer;
      }

      .ha-nintendo-switch-value {
        padding: 0 0.3em;
      }

      .ha-nintendo-switch-value,
      .ha-nintendo-switch-user {
        z-index: 2;
      }

      .ha-nintendo-switch-game-bg {
        z-index: 0;
        position: absolute;
        right: 0;
        height: 170%;
        width: auto;
        opacity: 0.5;
        mask-image: linear-gradient(to right, transparent 10%, black 90%);
        -webkit-mask-image: linear-gradient(to right, transparent 10%, black 90%);
      }

      .not-found {
        background-color: yellow;
        font-family: sans-serif;
        font-size: 14px;
        padding: 8px;
      }

      ha-card,
      ha-card > .kb-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .kb-container {
        width: 100%;
      }

      .ha-nintendo-switch-avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 8px;
      }

      ha-icon.ha-nintendo-switch-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
      }

      .ha-nintendo-switch-level {
        position: relative;
        margin: 16px;
      }

      .ha-nintendo-switch-level > .ha-nintendo-switch-level-text-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        margin-top: 2px;
        color: var(--secondary-background-color);
        z-index: 2;
        /* fix for font */
        transform: translateY(1px);
      }

      .ha-nintendo-switch-last-online {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .ha-nintendo-switch-now-playing {
        width: 100%;
        overflow: hidden;
        margin-top: 2em;
      }

      .ha-nintendo-switch-now-playing > .game-title {
        font-size: 1.7em;
        margin: 0.2em 0 1.5em;
      }

      .ha-nintendo-switch-now-playing > .game-img {
        width: 100%;
        height: auto;
      }

      .ha-nintendo-switch-multi {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 8px;
        position: relative;
        overflow: hidden;
      }

      .ha-nintendo-switch-multi .ha-nintendo-switch-user {
        display: flex;
        align-items: center;
      }

      .ha-nintendo-switch-multi .ha-nintendo-switch-avatar {
        margin: 0 16px 0 0;
      }

      .ha-nintendo-switch-multi::before {
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 2em;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: #646464;
        background-image: radial-gradient(top, #616161 0%, #616161 20%, #535353 60%);
        content: '';
        z-index: 3;
      }

      .ha-nintendo-switch-multi.online::before,
      .ha-nintendo-switch-multi.snooze::before {
        box-shadow: 0 0 1em #1c1c17, 0 0 1em #ff4242;
        background: #ff4f4f;
      }

      .kb-last {
        margin-bottom: 0;
      }
    `;
  }
}
