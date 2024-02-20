// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OverridesAPI from 'cloudflare/resources/firewalls/waf/overrides';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Overrides extends APIResource {
  /**
   * Creates a URI-based WAF override for a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  create(
    zoneIdentifier: string,
    body: OverrideCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/waf/overrides`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OverrideCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: OverrideUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideUpdateResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OverrideUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the URI-based WAF overrides in a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  list(
    zoneIdentifier: string,
    query?: OverrideListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OverrideListResponsesV4PagePaginationArray, OverrideListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OverrideListResponsesV4PagePaginationArray, OverrideListResponse>;
  list(
    zoneIdentifier: string,
    query: OverrideListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OverrideListResponsesV4PagePaginationArray, OverrideListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/waf/overrides`,
      OverrideListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`,
        options,
      ) as Core.APIPromise<{ result: OverrideDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, options) as Core.APIPromise<{
        result: OverrideGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OverrideListResponsesV4PagePaginationArray extends V4PagePaginationArray<OverrideListResponse> {}

export interface OverrideCreateResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: Record<string, unknown>;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused?: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority?: number;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: OverrideCreateResponse.RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: Record<string, 'challenge' | 'block' | 'simulate' | 'disable' | 'default'>;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls?: Array<string>;
}

export namespace OverrideCreateResponse {
  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  export interface RewriteAction {
    /**
     * The WAF rule action to apply.
     */
    block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    challenge?: unknown;

    default?: unknown;

    /**
     * The WAF rule action to apply.
     */
    disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    simulate?: unknown;
  }
}

export interface OverrideUpdateResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: Record<string, unknown>;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused?: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority?: number;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: OverrideUpdateResponse.RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: Record<string, 'challenge' | 'block' | 'simulate' | 'disable' | 'default'>;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls?: Array<string>;
}

export namespace OverrideUpdateResponse {
  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  export interface RewriteAction {
    /**
     * The WAF rule action to apply.
     */
    block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    challenge?: unknown;

    default?: unknown;

    /**
     * The WAF rule action to apply.
     */
    disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    simulate?: unknown;
  }
}

export interface OverrideListResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id: string;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority: number;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls: Array<string>;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: Record<string, unknown>;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: OverrideListResponse.RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: Record<string, 'challenge' | 'block' | 'simulate' | 'disable' | 'default'>;
}

export namespace OverrideListResponse {
  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  export interface RewriteAction {
    /**
     * The WAF rule action to apply.
     */
    block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    challenge?: unknown;

    default?: unknown;

    /**
     * The WAF rule action to apply.
     */
    disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    simulate?: unknown;
  }
}

export interface OverrideDeleteResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;
}

export interface OverrideGetResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: Record<string, unknown>;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused?: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority?: number;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: OverrideGetResponse.RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: Record<string, 'challenge' | 'block' | 'simulate' | 'disable' | 'default'>;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls?: Array<string>;
}

export namespace OverrideGetResponse {
  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  export interface RewriteAction {
    /**
     * The WAF rule action to apply.
     */
    block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    challenge?: unknown;

    default?: unknown;

    /**
     * The WAF rule action to apply.
     */
    disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    simulate?: unknown;
  }
}

export type OverrideCreateParams = unknown;

export type OverrideUpdateParams = unknown;

export interface OverrideListParams extends V4PagePaginationArrayParams {}

export namespace Overrides {
  export import OverrideCreateResponse = OverridesAPI.OverrideCreateResponse;
  export import OverrideUpdateResponse = OverridesAPI.OverrideUpdateResponse;
  export import OverrideListResponse = OverridesAPI.OverrideListResponse;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverrideGetResponse = OverridesAPI.OverrideGetResponse;
  export import OverrideListResponsesV4PagePaginationArray = OverridesAPI.OverrideListResponsesV4PagePaginationArray;
  export import OverrideCreateParams = OverridesAPI.OverrideCreateParams;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideListParams = OverridesAPI.OverrideListParams;
}
