// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/stream/webhooks';

export class Webhooks extends APIResource {
  /**
   * Creates a webhook notification.
   */
  update(
    accountId: string,
    body: WebhookUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/stream/webhook`, { body, ...options }) as Core.APIPromise<{
        result: WebhookUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a webhook.
   */
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/stream/webhook`, options) as Core.APIPromise<{
        result: WebhookDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of webhooks.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/webhook`, options) as Core.APIPromise<{
        result: WebhookGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WebhookUpdateResponse = unknown | string;

export type WebhookDeleteResponse = unknown | string;

export type WebhookGetResponse = unknown | string;

export interface WebhookUpdateParams {
  /**
   * The URL where webhooks will be sent.
   */
  notificationUrl: string;
}

export namespace Webhooks {
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
}
