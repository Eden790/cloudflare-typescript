// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomsAPI from 'cloudflare/resources/dlp/profiles/customs';

export class Customs extends APIResource {
  /**
   * Creates a set of DLP custom profiles.
   */
  create(
    accountId: string,
    body: CustomCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/dlp/profiles/custom`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom profile.
   */
  update(
    accountId: string,
    profileId: string,
    body: CustomUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomUpdateResponse> {
    return this._client.put(`/accounts/${accountId}/dlp/profiles/custom/${profileId}`, { body, ...options });
  }

  /**
   * Deletes a DLP custom profile.
   */
  delete(
    accountId: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: CustomDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a custom DLP profile.
   */
  get(
    accountId: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: CustomGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomCreateResponse = Array<CustomCreateResponse.CustomCreateResponseItem>;

export namespace CustomCreateResponse {
  export interface CustomCreateResponseItem {
    /**
     * The ID for this profile
     */
    id?: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<CustomCreateResponseItem.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'custom';

    updated_at?: string;
  }

  export namespace CustomCreateResponseItem {
    /**
     * A custom entry that matches a profile
     */
    export interface Entry {
      /**
       * The ID for this entry
       */
      id?: string;

      created_at?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * A pattern that matches an entry
       */
      pattern?: Entry.Pattern;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }
}

export interface CustomUpdateResponse {
  /**
   * The ID for this profile
   */
  id?: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  created_at?: string;

  /**
   * The description of the profile.
   */
  description?: string;

  /**
   * The entries for this profile.
   */
  entries?: Array<CustomUpdateResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'custom';

  updated_at?: string;
}

export namespace CustomUpdateResponse {
  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * The ID for this entry
     */
    id?: string;

    created_at?: string;

    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;

    updated_at?: string;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }
}

export type CustomDeleteResponse = unknown | string | null;

export interface CustomGetResponse {
  /**
   * The ID for this profile
   */
  id?: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  created_at?: string;

  /**
   * The description of the profile.
   */
  description?: string;

  /**
   * The entries for this profile.
   */
  entries?: Array<CustomGetResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'custom';

  updated_at?: string;
}

export namespace CustomGetResponse {
  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * The ID for this entry
     */
    id?: string;

    created_at?: string;

    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;

    updated_at?: string;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }
}

export interface CustomCreateParams {
  profiles: Array<CustomCreateParams.Profile>;
}

export namespace CustomCreateParams {
  export interface Profile {
    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<Profile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;
  }

  export namespace Profile {
    /**
     * A custom entry create payload
     */
    export interface Entry {
      /**
       * Whether the entry is enabled or not.
       */
      enabled: boolean;

      /**
       * The name of the entry.
       */
      name: string;

      /**
       * A pattern that matches an entry
       */
      pattern: Entry.Pattern;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }
}

export interface CustomUpdateParams {
  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * The description of the profile.
   */
  description?: string;

  /**
   * The custom entries for this profile. Array elements with IDs are modifying the
   * existing entry with that ID. Elements without ID will create new entries. Any
   * entry not in the list will be deleted.
   */
  entries?: Array<CustomUpdateParams.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your
   * Microsoft Information Protection profiles).
   */
  shared_entries?: Array<
    CustomUpdateParams.DLPSharedEntryUpdatePredefined | CustomUpdateParams.DLPSharedEntryUpdateIntegration
  >;
}

export namespace CustomUpdateParams {
  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }

  /**
   * Properties of a predefined entry in a custom profile
   */
  export interface DLPSharedEntryUpdatePredefined {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }

  /**
   * Properties of an integration entry in a custom profile
   */
  export interface DLPSharedEntryUpdateIntegration {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }
}

export namespace Customs {
  export import CustomCreateResponse = CustomsAPI.CustomCreateResponse;
  export import CustomUpdateResponse = CustomsAPI.CustomUpdateResponse;
  export import CustomDeleteResponse = CustomsAPI.CustomDeleteResponse;
  export import CustomGetResponse = CustomsAPI.CustomGetResponse;
  export import CustomCreateParams = CustomsAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomsAPI.CustomUpdateParams;
}
