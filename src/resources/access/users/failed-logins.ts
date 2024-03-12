// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FailedLoginsAPI from 'cloudflare/resources/access/users/failed-logins';

export class FailedLogins extends APIResource {
  /**
   * Get all failed login attempts for a single user.
   */
  zeroTrustUsersGetFailedLogins(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FailedLoginZeroTrustUsersGetFailedLoginsResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/failed_logins`,
        options,
      ) as Core.APIPromise<{ result: FailedLoginZeroTrustUsersGetFailedLoginsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FailedLoginZeroTrustUsersGetFailedLoginsResponse =
  Array<FailedLoginZeroTrustUsersGetFailedLoginsResponse.FailedLoginZeroTrustUsersGetFailedLoginsResponseItem>;

export namespace FailedLoginZeroTrustUsersGetFailedLoginsResponse {
  export interface FailedLoginZeroTrustUsersGetFailedLoginsResponseItem {
    expiration?: number;

    metadata?: unknown;
  }
}

export namespace FailedLogins {
  export import FailedLoginZeroTrustUsersGetFailedLoginsResponse = FailedLoginsAPI.FailedLoginZeroTrustUsersGetFailedLoginsResponse;
}