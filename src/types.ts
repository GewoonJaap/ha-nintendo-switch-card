import { ActionConfig, LovelaceCardConfig } from 'custom-card-helpers';

export interface BoilerplateCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface HAEntityType {
  attributes: Friend;
}

export interface Friend {
  id: number;
  nsaId: string;
  imageUri: string;
  name: string;
  isFriend: boolean;
  isFavoriteFriend: boolean;
  isServiceUser: boolean;
  friendCreatedAt: number;
  presence: Presence;
}

export interface Presence {
  state: PresenceState;
  updatedAt: number;
  logoutAt: number;
  game: Game;
}

export interface Game {
  name: string;
  imageUri: string;
  shopUri: string;
  totalPlayTime: number;
  firstPlayedAt: number;
  sysDescription: string;
}

export enum PresenceState {
  /** Offline */
  OFFLINE = 'OFFLINE',
  /** A console linked to this account is online, but the user isn't selected in an application */
  INACTIVE = 'INACTIVE',
  /** The user is selected in an application */
  ONLINE = 'ONLINE',
  /**
   * The user is selected in an application and playing online.
   * (Is this set by Nintendo's servers if the user is in a session on Nintendo's servers, or by the application
   * running on the console?)
   */
  PLAYING = 'PLAYING',
}
