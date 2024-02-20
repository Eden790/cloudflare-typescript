// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AutomaticHTTPSRewritesAPI from 'cloudflare/resources/settings/automatic-https-rewrites';

export class AutomaticHTTPSRewrites extends APIResource {
  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  edit(
    zoneId: string,
    body: AutomaticHTTPSRewriteEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticHTTPSRewriteEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/automatic_https_rewrites`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AutomaticHTTPSRewriteEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<AutomaticHTTPSRewriteGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/automatic_https_rewrites`, options) as Core.APIPromise<{
        result: AutomaticHTTPSRewriteGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable the Automatic HTTPS Rewrites feature for this zone.
 */
export interface AutomaticHTTPSRewriteEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'automatic_https_rewrites';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * Enable the Automatic HTTPS Rewrites feature for this zone.
 */
export interface AutomaticHTTPSRewriteGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'automatic_https_rewrites';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface AutomaticHTTPSRewriteEditParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off';
}

export namespace AutomaticHTTPSRewrites {
  export import AutomaticHTTPSRewriteEditResponse = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditResponse;
  export import AutomaticHTTPSRewriteGetResponse = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteGetResponse;
  export import AutomaticHTTPSRewriteEditParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditParams;
}
