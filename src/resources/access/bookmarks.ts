// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BookmarksAPI from 'cloudflare/resources/access/bookmarks';

export class Bookmarks extends APIResource {
  /**
   * Fetches a single Bookmark application.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkRetrieveResponse> {
    return (
      this._client.get(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: BookmarkRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Bookmark application.
   */
  update(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkUpdateResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: BookmarkUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a Bookmark application.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkDeleteResponse> {
    return (
      this._client.delete(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: BookmarkDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Bookmark applications.
   */
  accessBookmarkApplicationsDeprecatedListBookmarkApplications(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/access/bookmarks`, options) as Core.APIPromise<{
        result: BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BookmarkRetrieveResponse {
  /**
   * The unique identifier for the Bookmark application.
   */
  id?: unknown;

  /**
   * Displays the application in the App Launcher.
   */
  app_launcher_visible?: boolean;

  created_at?: string;

  /**
   * The domain of the Bookmark application.
   */
  domain?: string;

  /**
   * The image URL for the logo shown in the App Launcher dashboard.
   */
  logo_url?: string;

  /**
   * The name of the Bookmark application.
   */
  name?: string;

  updated_at?: string;
}

export interface BookmarkUpdateResponse {
  /**
   * The unique identifier for the Bookmark application.
   */
  id?: unknown;

  /**
   * Displays the application in the App Launcher.
   */
  app_launcher_visible?: boolean;

  created_at?: string;

  /**
   * The domain of the Bookmark application.
   */
  domain?: string;

  /**
   * The image URL for the logo shown in the App Launcher dashboard.
   */
  logo_url?: string;

  /**
   * The name of the Bookmark application.
   */
  name?: string;

  updated_at?: string;
}

export interface BookmarkDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export type BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse =
  Array<BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse.BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponseItem>;

export namespace BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse {
  export interface BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponseItem {
    /**
     * The unique identifier for the Bookmark application.
     */
    id?: unknown;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    created_at?: string;

    /**
     * The domain of the Bookmark application.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the Bookmark application.
     */
    name?: string;

    updated_at?: string;
  }
}

export namespace Bookmarks {
  export import BookmarkRetrieveResponse = BookmarksAPI.BookmarkRetrieveResponse;
  export import BookmarkUpdateResponse = BookmarksAPI.BookmarkUpdateResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse = BookmarksAPI.BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse;
}