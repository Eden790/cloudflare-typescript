// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DefaultAPI from 'cloudflare/resources/zaraz/default';

export class Default extends APIResource {
  /**
   * Gets default Zaraz configuration for a zone.
   */
  retrieve(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<DefaultRetrieveResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/zaraz/default`, options) as Core.APIPromise<{
        result: DefaultRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Zaraz configuration
 */
export interface DefaultRetrieveResponse {
  /**
   * Data layer compatibility mode enabled.
   */
  dataLayer: boolean;

  /**
   * The key for Zaraz debug mode.
   */
  debugKey: string;

  /**
   * General Zaraz settings.
   */
  settings: DefaultRetrieveResponse.Settings;

  /**
   * Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID
   * and value is the tool configuration object.
   */
  tools: Record<
    string,
    DefaultRetrieveResponse.ZarazManagedComponent | DefaultRetrieveResponse.ZarazCustomManagedComponent
  >;

  /**
   * Triggers set up under Zaraz configuration, where key is the trigger
   * alpha-numeric ID and value is the trigger configuration.
   */
  triggers: Record<string, DefaultRetrieveResponse.Triggers>;

  /**
   * Variables set up under Zaraz configuration, where key is the variable
   * alpha-numeric ID and value is the variable configuration. Values of variables of
   * type secret are not included.
   */
  variables: Record<string, DefaultRetrieveResponse.UnionMember0 | DefaultRetrieveResponse.UnionMember1>;

  /**
   * Zaraz internal version of the config.
   */
  zarazVersion: number;

  /**
   * Consent management configuration.
   */
  consent?: DefaultRetrieveResponse.Consent;

  /**
   * Single Page Application support enabled.
   */
  historyChange?: boolean;
}

export namespace DefaultRetrieveResponse {
  /**
   * General Zaraz settings.
   */
  export interface Settings {
    /**
     * Automatic injection of Zaraz scripts enabled.
     */
    autoInjectScript: boolean;

    /**
     * Details of the worker that receives and edits Zaraz Context object.
     */
    contextEnricher?: Settings.ContextEnricher;

    /**
     * The domain Zaraz will use for writing and reading its cookies.
     */
    cookieDomain?: string;

    /**
     * Ecommerce API enabled.
     */
    ecommerce?: boolean;

    /**
     * Custom endpoint for server-side track events.
     */
    eventsApiPath?: string;

    /**
     * Hiding external referrer URL enabled.
     */
    hideExternalReferer?: boolean;

    /**
     * Trimming IP address enabled.
     */
    hideIPAddress?: boolean;

    /**
     * Removing URL query params enabled.
     */
    hideQueryParams?: boolean;

    /**
     * Removing sensitive data from User Aagent string enabled.
     */
    hideUserAgent?: boolean;

    /**
     * Custom endpoint for Zaraz init script.
     */
    initPath?: string;

    /**
     * Injection of Zaraz scripts into iframes enabled.
     */
    injectIframes?: boolean;

    /**
     * Custom path for Managed Components server functionalities.
     */
    mcRootPath?: string;

    /**
     * Custom endpoint for Zaraz main script.
     */
    scriptPath?: string;

    /**
     * Custom endpoint for Zaraz tracking requests.
     */
    trackPath?: string;
  }

  export namespace Settings {
    /**
     * Details of the worker that receives and edits Zaraz Context object.
     */
    export interface ContextEnricher {
      escapedWorkerName: string;

      workerTag: string;
    }
  }

  export interface ZarazManagedComponent {
    /**
     * List of blocking trigger IDs
     */
    blockingTriggers: Array<string>;

    /**
     * Tool's internal name
     */
    component: string;

    /**
     * Default fields for tool's actions
     */
    defaultFields: Record<string, string | boolean>;

    /**
     * Whether tool is enabled
     */
    enabled: boolean;

    /**
     * Tool's name defined by the user
     */
    name: string;

    /**
     * List of permissions granted to the component
     */
    permissions: Array<string>;

    /**
     * Tool's settings
     */
    settings: Record<string, string | boolean>;

    type: 'component';

    /**
     * Actions configured on a tool. Either this or neoEvents field is required.
     */
    actions?: Record<string, ZarazManagedComponent.Actions>;

    /**
     * Default consent purpose ID
     */
    defaultPurpose?: string;

    /**
     * DEPRECATED - List of actions configured on a tool. Either this or actions field
     * is required. If both are present, actions field will take precedence.
     */
    neoEvents?: Array<ZarazManagedComponent.NeoEvent>;
  }

  export namespace ZarazManagedComponent {
    export interface Actions {
      /**
       * Tool event type
       */
      actionType: string;

      /**
       * List of blocking triggers IDs
       */
      blockingTriggers: Array<string>;

      /**
       * Event payload
       */
      data: unknown;

      /**
       * List of firing triggers IDs
       */
      firingTriggers: Array<string>;
    }

    export interface NeoEvent {
      /**
       * Tool event type
       */
      actionType: string;

      /**
       * List of blocking triggers IDs
       */
      blockingTriggers: Array<string>;

      /**
       * Event payload
       */
      data: unknown;

      /**
       * List of firing triggers IDs
       */
      firingTriggers: Array<string>;
    }
  }

  export interface ZarazCustomManagedComponent {
    /**
     * List of blocking trigger IDs
     */
    blockingTriggers: Array<string>;

    /**
     * Tool's internal name
     */
    component: string;

    /**
     * Default fields for tool's actions
     */
    defaultFields: Record<string, string | boolean>;

    /**
     * Whether tool is enabled
     */
    enabled: boolean;

    /**
     * Tool's name defined by the user
     */
    name: string;

    /**
     * List of permissions granted to the component
     */
    permissions: Array<string>;

    /**
     * Tool's settings
     */
    settings: Record<string, string | boolean>;

    type: 'custom-mc';

    /**
     * Cloudflare worker that acts as a managed component
     */
    worker: ZarazCustomManagedComponent.Worker;

    /**
     * Actions configured on a tool. Either this or neoEvents field is required.
     */
    actions?: Record<string, ZarazCustomManagedComponent.Actions>;

    /**
     * Default consent purpose ID
     */
    defaultPurpose?: string;

    /**
     * DEPRECATED - List of actions configured on a tool. Either this or actions field
     * is required. If both are present, actions field will take precedence.
     */
    neoEvents?: Array<ZarazCustomManagedComponent.NeoEvent>;
  }

  export namespace ZarazCustomManagedComponent {
    /**
     * Cloudflare worker that acts as a managed component
     */
    export interface Worker {
      escapedWorkerName: string;

      workerTag: string;
    }

    export interface Actions {
      /**
       * Tool event type
       */
      actionType: string;

      /**
       * List of blocking triggers IDs
       */
      blockingTriggers: Array<string>;

      /**
       * Event payload
       */
      data: unknown;

      /**
       * List of firing triggers IDs
       */
      firingTriggers: Array<string>;
    }

    export interface NeoEvent {
      /**
       * Tool event type
       */
      actionType: string;

      /**
       * List of blocking triggers IDs
       */
      blockingTriggers: Array<string>;

      /**
       * Event payload
       */
      data: unknown;

      /**
       * List of firing triggers IDs
       */
      firingTriggers: Array<string>;
    }
  }

  export interface Triggers {
    /**
     * Rules defining when the trigger is not fired.
     */
    excludeRules: Array<
      | Triggers.ZarazLoadRule
      | Triggers.ZarazClickListenerRule
      | Triggers.ZarazTimerRule
      | Triggers.ZarazFormSubmissionRule
      | Triggers.ZarazVariableMatchRule
      | Triggers.ZarazScrollDepthRule
      | Triggers.ZarazElementVisibilityRule
    >;

    /**
     * Rules defining when the trigger is fired.
     */
    loadRules: Array<
      | Triggers.ZarazLoadRule
      | Triggers.ZarazClickListenerRule
      | Triggers.ZarazTimerRule
      | Triggers.ZarazFormSubmissionRule
      | Triggers.ZarazVariableMatchRule
      | Triggers.ZarazScrollDepthRule
      | Triggers.ZarazElementVisibilityRule
    >;

    /**
     * Trigger name.
     */
    name: string;

    /**
     * Trigger description.
     */
    description?: string;

    system?: 'pageload';
  }

  export namespace Triggers {
    export interface ZarazLoadRule {
      id: string;

      match: string;

      op:
        | 'CONTAINS'
        | 'EQUALS'
        | 'STARTS_WITH'
        | 'ENDS_WITH'
        | 'MATCH_REGEX'
        | 'NOT_MATCH_REGEX'
        | 'GREATER_THAN'
        | 'GREATER_THAN_OR_EQUAL'
        | 'LESS_THAN'
        | 'LESS_THAN_OR_EQUAL';

      value: string;
    }

    export interface ZarazClickListenerRule {
      id: string;

      action: 'clickListener';

      settings: ZarazClickListenerRule.Settings;
    }

    export namespace ZarazClickListenerRule {
      export interface Settings {
        selector: string;

        type: 'xpath' | 'css';

        waitForTags: number;
      }
    }

    export interface ZarazTimerRule {
      id: string;

      action: 'timer';

      settings: ZarazTimerRule.Settings;
    }

    export namespace ZarazTimerRule {
      export interface Settings {
        interval: number;

        limit: number;
      }
    }

    export interface ZarazFormSubmissionRule {
      id: string;

      action: 'formSubmission';

      settings: ZarazFormSubmissionRule.Settings;
    }

    export namespace ZarazFormSubmissionRule {
      export interface Settings {
        selector: string;

        validate: boolean;
      }
    }

    export interface ZarazVariableMatchRule {
      id: string;

      action: 'variableMatch';

      settings: ZarazVariableMatchRule.Settings;
    }

    export namespace ZarazVariableMatchRule {
      export interface Settings {
        match: string;

        variable: string;
      }
    }

    export interface ZarazScrollDepthRule {
      id: string;

      action: 'scrollDepth';

      settings: ZarazScrollDepthRule.Settings;
    }

    export namespace ZarazScrollDepthRule {
      export interface Settings {
        positions: string;
      }
    }

    export interface ZarazElementVisibilityRule {
      id: string;

      action: 'elementVisibility';

      settings: ZarazElementVisibilityRule.Settings;
    }

    export namespace ZarazElementVisibilityRule {
      export interface Settings {
        selector: string;
      }
    }

    export interface ZarazLoadRule {
      id: string;

      match: string;

      op:
        | 'CONTAINS'
        | 'EQUALS'
        | 'STARTS_WITH'
        | 'ENDS_WITH'
        | 'MATCH_REGEX'
        | 'NOT_MATCH_REGEX'
        | 'GREATER_THAN'
        | 'GREATER_THAN_OR_EQUAL'
        | 'LESS_THAN'
        | 'LESS_THAN_OR_EQUAL';

      value: string;
    }

    export interface ZarazClickListenerRule {
      id: string;

      action: 'clickListener';

      settings: ZarazClickListenerRule.Settings;
    }

    export namespace ZarazClickListenerRule {
      export interface Settings {
        selector: string;

        type: 'xpath' | 'css';

        waitForTags: number;
      }
    }

    export interface ZarazTimerRule {
      id: string;

      action: 'timer';

      settings: ZarazTimerRule.Settings;
    }

    export namespace ZarazTimerRule {
      export interface Settings {
        interval: number;

        limit: number;
      }
    }

    export interface ZarazFormSubmissionRule {
      id: string;

      action: 'formSubmission';

      settings: ZarazFormSubmissionRule.Settings;
    }

    export namespace ZarazFormSubmissionRule {
      export interface Settings {
        selector: string;

        validate: boolean;
      }
    }

    export interface ZarazVariableMatchRule {
      id: string;

      action: 'variableMatch';

      settings: ZarazVariableMatchRule.Settings;
    }

    export namespace ZarazVariableMatchRule {
      export interface Settings {
        match: string;

        variable: string;
      }
    }

    export interface ZarazScrollDepthRule {
      id: string;

      action: 'scrollDepth';

      settings: ZarazScrollDepthRule.Settings;
    }

    export namespace ZarazScrollDepthRule {
      export interface Settings {
        positions: string;
      }
    }

    export interface ZarazElementVisibilityRule {
      id: string;

      action: 'elementVisibility';

      settings: ZarazElementVisibilityRule.Settings;
    }

    export namespace ZarazElementVisibilityRule {
      export interface Settings {
        selector: string;
      }
    }
  }

  export interface UnionMember0 {
    name: string;

    type: 'string' | 'secret';

    value: string;
  }

  export interface UnionMember1 {
    name: string;

    type: 'worker';

    value: UnionMember1.Value;
  }

  export namespace UnionMember1 {
    export interface Value {
      escapedWorkerName: string;

      workerTag: string;
    }
  }

  /**
   * Consent management configuration.
   */
  export interface Consent {
    enabled: boolean;

    buttonTextTranslations?: Consent.ButtonTextTranslations;

    companyEmail?: string;

    companyName?: string;

    companyStreetAddress?: string;

    consentModalIntroHTML?: string;

    /**
     * Object where keys are language codes
     */
    consentModalIntroHTMLWithTranslations?: Record<string, string>;

    cookieName?: string;

    customCSS?: string;

    customIntroDisclaimerDismissed?: boolean;

    defaultLanguage?: string;

    hideModal?: boolean;

    /**
     * Object where keys are purpose alpha-numeric IDs
     */
    purposes?: Record<string, Consent.Purposes>;

    /**
     * Object where keys are purpose alpha-numeric IDs
     */
    purposesWithTranslations?: Record<string, Consent.PurposesWithTranslations>;
  }

  export namespace Consent {
    export interface ButtonTextTranslations {
      /**
       * Object where keys are language codes
       */
      accept_all: Record<string, string>;

      /**
       * Object where keys are language codes
       */
      confirm_my_choices: Record<string, string>;

      /**
       * Object where keys are language codes
       */
      reject_all: Record<string, string>;
    }

    export interface Purposes {
      description: string;

      name: string;
    }

    export interface PurposesWithTranslations {
      /**
       * Object where keys are language codes
       */
      description: Record<string, string>;

      /**
       * Object where keys are language codes
       */
      name: Record<string, string>;

      order: number;
    }
  }
}

export namespace Default {
  export import DefaultRetrieveResponse = DefaultAPI.DefaultRetrieveResponse;
}