interface BootOptions {
  siteId: number;
  groupId?: number;
  clickToCall?: boolean;
  engagementId?: string;
  customVars?: any;
  visitorId?: string;
  isPopout?: boolean;
  chatRequestedFromUrl?: string;
  disableInline?: boolean;
  disableLauncher?: boolean;
  disableVisitorMonitoring?: boolean;
  cookieDomain?: string;
}

export interface EcommerceData {
  CartTotal: number;
  CartItems: Array<EcommerceCartItem>;
  RecentlyViewed: Array<EcommerceProduct>;
}

declare module "@velaro/velaro-visitor-sdk" {
  /**
   * The boot method is responsible for bootstrapping Velaro chat with necessary configurations and
   * mounting the chat window to the DOM. This method will also trigger visitor monitoring functions.
   * @param opts Object containing configuration settings.
   * @param callback Will fire when all asynchronous work to mount the component has completed.
   */
  export async function boot(
    opts: BootOptions,
    callback?: Function
  ): Promise<void>;

  /**
   * Destroys the chat instance. This should be called prior to making additional calls to `boot`.
   */
  export function destroy(): void;

  /**
   * Mounts a chat button within the provided DOM element. This button will automatically update as
   * agent availability changes. See https://app.velaro.com/#admin/design/chat-designer?groupId=0&section=popout-button
   * to configure the appearance of the button.
   * @param opts Configuration options for the dynamic button.
   */
  export function mountDynamicButton(opts: { el: HTMLElement }): void;

  /**
   * Requests availability information for the configured group from Velaro servers.
   * @param callback Provides boolean containing availability status.
   */
  export async function isChatAvailable(
    callback: (isAvailable: boolean) => void
  ): Promise<void>;

  /**
   *  Expands the inline chat window.
   */
  export async function expand(): Promise<void>;

  /**
   * Collapses the inline chat window.
   */
  export async function collapse(): Promise<void>;

  /**
   * Pops the chat window out into a new window.
   */
  export async function popout(): Promise<void>;

  /**
   * Returns true if the chat window is expanded.
   */
  export function isExpanded(): boolean;

  /**
   * Fires a callback when the chat window has been expanded.
   * @param callback Fired when the window is expanded.
   */
  export function onExpand(callback: () => void): void;

  /**
   * Fires a callback when the chat window has been collapsed.
   * @param callback Fired when the window is collapsed.
   */
  export function onCollapse(callback: () => void): void;

  /**
   * Sets the visibility of the inline chat launcher.
   * @param visibility `hidden` or `visible`
   */
  export function setLauncherVisibility(visibility: "hidden" | "visible"): void;

  /**
   * Creates a conversion record.
   * @param conversion Conversion record to create.
   */
  export async function addConversion(conversion: {
    conversionId: any;
    dollarAmount: any;
    customData: any;
  }): Promise<void>;
}
