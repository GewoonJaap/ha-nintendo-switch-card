import { ActionConfig, LovelaceCardConfig } from 'custom-card-helpers';

// TODO Add your configuration elements here for type-checking
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
  attributes: NintendoSwitchUserType;
}

export interface NintendoSwitchUserType {
  id: number;
  nsaId: string;
  imageUri: string;
  name: string;
  supportId: string;
  isChildRestricted: boolean;
  etag: string;
  links: Links;
  permissions: Permissions;
  presence: Presence;
}

export interface Links {
  nintendoAccount: NintendoAccount;
  friendCode: FriendCode;
}

export interface NintendoAccount {
  membership: Membership;
}

export interface Membership {
  active: Active;
}

export interface Active {
  active: boolean;
}

export interface FriendCode {
  regenerable: boolean;
  regenerableAt: number;
  id: string;
}

export interface Permissions {
  presence: string;
}

export interface Presence {
  state: string;
  updatedAt: number;
  logoutAt: number;
  game: Game | null;
}

export interface Game {
  name: string;
  imageUri: string;
  shopUri: string;
  totalPlayTime: string;
  firstPlayedAt: string;
}
