// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as GroupsAPI from 'cloudflare/resources/firewall/waf/packages/groups';

export class Groups extends APIResource {
  /**
   * Fetches the details of a WAF rule group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  retrieve(
    zoneId: string,
    packageId: string,
    groupId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupRetrieveResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/firewall/waf/packages/${packageId}/groups/${groupId}`,
        options,
      ) as Core.APIPromise<{ result: GroupRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a WAF rule group. You can update the state (`mode` parameter) of a rule
   * group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  update(
    zoneId: string,
    packageId: string,
    groupId: string,
    body: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/firewall/waf/packages/${packageId}/groups/${groupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GroupUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the WAF rule groups in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  list(
    zoneId: string,
    packageId: string,
    query?: GroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupListResponse | null>;
  list(
    zoneId: string,
    packageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupListResponse | null>;
  list(
    zoneId: string,
    packageId: string,
    query: GroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, packageId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/firewall/waf/packages/${packageId}/groups`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: GroupListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type GroupRetrieveResponse = unknown | Array<unknown> | string;

export type GroupUpdateResponse = unknown | Array<unknown> | string;

export type GroupListResponse = Array<GroupListResponse.GroupListResponseItem>;

export namespace GroupListResponse {
  export interface GroupListResponseItem {
    /**
     * The unique identifier of the rule group.
     */
    id: string;

    /**
     * An informative summary of what the rule group does.
     */
    description: string | null;

    /**
     * The state of the rules contained in the rule group. When `on`, the rules in the
     * group are configurable/usable.
     */
    mode: 'on' | 'off';

    /**
     * The name of the rule group.
     */
    name: string;

    /**
     * The number of rules in the current rule group.
     */
    rules_count: number;

    /**
     * The available states for the rule group.
     */
    allowed_modes?: Array<'on' | 'off'>;

    /**
     * The number of rules within the group that have been modified from their default
     * configuration.
     */
    modified_rules_count?: number;

    /**
     * The unique identifier of a WAF package.
     */
    package_id?: string;
  }
}

export interface GroupUpdateParams {
  /**
   * The state of the rules contained in the rule group. When `on`, the rules in the
   * group are configurable/usable.
   */
  mode?: 'on' | 'off';
}

export interface GroupListParams {
  /**
   * The direction used to sort returned rule groups.
   */
  direction?: 'asc' | 'desc';

  /**
   * When set to `all`, all the search requirements must match. When set to `any`,
   * only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * The state of the rules contained in the rule group. When `on`, the rules in the
   * group are configurable/usable.
   */
  mode?: 'on' | 'off';

  /**
   * The field used to sort returned rule groups.
   */
  order?: 'mode' | 'rules_count';

  /**
   * The page number of paginated results.
   */
  page?: number;

  /**
   * The number of rule groups per page.
   */
  per_page?: number;
}

export namespace Groups {
  export import GroupRetrieveResponse = GroupsAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupListResponse = GroupsAPI.GroupListResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupListParams = GroupsAPI.GroupListParams;
}