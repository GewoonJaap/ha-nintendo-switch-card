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
  state: string;
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
