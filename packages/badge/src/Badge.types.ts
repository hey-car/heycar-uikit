import React from 'react';

export interface BadgeProps {
  /**
   * Customize Badge text color
   */
  color?: string;
  /**
   * Number to show in badge
   */
  count?: number;
  /**
   * Set size of the badge
   */
  size?: string;
  /**
   * icon element to show
   */
  icon?: Element;
  /**
   * set a symbol in badge
   */
  symbol?: string;
  /**
   * Customize Badge background color
   */
  background?: string;
  /**
   * text of badge
   */
  text: string;
}
