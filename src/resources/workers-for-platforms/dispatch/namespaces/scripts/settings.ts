// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/settings';

export class Settings extends APIResource {
  /**
   * Get script settings from a script uploaded to a Workers for Platforms namespace.
   */
  retrieve(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch script metadata, such as bindings
   */
  update(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    body: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse> {
    return (
      this._client.patch(
        `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
        { body, ...options },
      ) as Core.APIPromise<{ result: SettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingRetrieveResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingRetrieveResponse.WorkersKvNamespaceBinding
    | SettingRetrieveResponse.WorkersServiceBinding
    | SettingRetrieveResponse.WorkersDoBinding
    | SettingRetrieveResponse.WorkersR2Binding
    | SettingRetrieveResponse.WorkersQueueBinding
    | SettingRetrieveResponse.WorkersD1Binding
    | SettingRetrieveResponse.WorkersDispatchNamespaceBinding
    | SettingRetrieveResponse.WorkersMtlsCertBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | SettingRetrieveResponse.WorkersSingleStepMigrations
    | SettingRetrieveResponse.WorkersSteppedMigrations;

  placement?: SettingRetrieveResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingRetrieveResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingRetrieveResponse {
  export interface WorkersKvNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface WorkersServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface WorkersDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface WorkersR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

  export interface WorkersQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface WorkersD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface WorkersDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: WorkersDispatchNamespaceBinding.Outbound;
  }

  export namespace WorkersDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface WorkersMtlsCertBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

  /**
   * A single set of migrations to apply.
   */
  export interface WorkersSingleStepMigrations {
    /**
     * A list of classes to delete Durable Object namespaces from.
     */
    deleted_classes?: Array<string>;

    /**
     * A list of classes to create Durable Object namespaces from.
     */
    new_classes?: Array<string>;

    /**
     * Tag to set as the latest migration tag.
     */
    new_tag?: string;

    /**
     * Tag used to verify against the latest migration tag for this Worker. If they
     * don't match, the upload is rejected.
     */
    old_tag?: string;

    /**
     * A list of classes with Durable Object namespaces that were renamed.
     */
    renamed_classes?: Array<WorkersSingleStepMigrations.RenamedClass>;

    /**
     * A list of transfers for Durable Object namespaces from a different Worker and
     * class to a class defined in this Worker.
     */
    transferred_classes?: Array<WorkersSingleStepMigrations.TransferredClass>;
  }

  export namespace WorkersSingleStepMigrations {
    export interface RenamedClass {
      from?: string;

      to?: string;
    }

    export interface TransferredClass {
      from?: string;

      from_script?: string;

      to?: string;
    }
  }

  export interface WorkersSteppedMigrations {
    /**
     * Tag to set as the latest migration tag.
     */
    new_tag?: string;

    /**
     * Tag used to verify against the latest migration tag for this Worker. If they
     * don't match, the upload is rejected.
     */
    old_tag?: string;

    /**
     * Migrations to apply in order.
     */
    steps?: Array<WorkersSteppedMigrations.Step>;
  }

  export namespace WorkersSteppedMigrations {
    export interface Step {
      /**
       * A list of classes to delete Durable Object namespaces from.
       */
      deleted_classes?: Array<string>;

      /**
       * A list of classes to create Durable Object namespaces from.
       */
      new_classes?: Array<string>;

      /**
       * A list of classes with Durable Object namespaces that were renamed.
       */
      renamed_classes?: Array<Step.RenamedClass>;

      /**
       * A list of transfers for Durable Object namespaces from a different Worker and
       * class to a class defined in this Worker.
       */
      transferred_classes?: Array<Step.TransferredClass>;
    }

    export namespace Step {
      export interface RenamedClass {
        from?: string;

        to?: string;
      }

      export interface TransferredClass {
        from?: string;

        from_script?: string;

        to?: string;
      }
    }
  }

  export interface Placement {
    /**
     * Enables
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     * Only `"smart"` is currently supported
     */
    mode?: 'smart';
  }

  /**
   * A reference to a script that will consume logs from the attached Worker.
   */
  export interface TailConsumer {
    /**
     * Name of Worker that is to be the consumer.
     */
    service: string;

    /**
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;

    /**
     * Optional dispatch namespace the script belongs to.
     */
    namespace?: string;
  }
}

export interface SettingUpdateResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingUpdateResponse.WorkersKvNamespaceBinding
    | SettingUpdateResponse.WorkersServiceBinding
    | SettingUpdateResponse.WorkersDoBinding
    | SettingUpdateResponse.WorkersR2Binding
    | SettingUpdateResponse.WorkersQueueBinding
    | SettingUpdateResponse.WorkersD1Binding
    | SettingUpdateResponse.WorkersDispatchNamespaceBinding
    | SettingUpdateResponse.WorkersMtlsCertBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | SettingUpdateResponse.WorkersSingleStepMigrations
    | SettingUpdateResponse.WorkersSteppedMigrations;

  placement?: SettingUpdateResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingUpdateResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingUpdateResponse {
  export interface WorkersKvNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface WorkersServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface WorkersDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface WorkersR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

  export interface WorkersQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface WorkersD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface WorkersDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: WorkersDispatchNamespaceBinding.Outbound;
  }

  export namespace WorkersDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface WorkersMtlsCertBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

  /**
   * A single set of migrations to apply.
   */
  export interface WorkersSingleStepMigrations {
    /**
     * A list of classes to delete Durable Object namespaces from.
     */
    deleted_classes?: Array<string>;

    /**
     * A list of classes to create Durable Object namespaces from.
     */
    new_classes?: Array<string>;

    /**
     * Tag to set as the latest migration tag.
     */
    new_tag?: string;

    /**
     * Tag used to verify against the latest migration tag for this Worker. If they
     * don't match, the upload is rejected.
     */
    old_tag?: string;

    /**
     * A list of classes with Durable Object namespaces that were renamed.
     */
    renamed_classes?: Array<WorkersSingleStepMigrations.RenamedClass>;

    /**
     * A list of transfers for Durable Object namespaces from a different Worker and
     * class to a class defined in this Worker.
     */
    transferred_classes?: Array<WorkersSingleStepMigrations.TransferredClass>;
  }

  export namespace WorkersSingleStepMigrations {
    export interface RenamedClass {
      from?: string;

      to?: string;
    }

    export interface TransferredClass {
      from?: string;

      from_script?: string;

      to?: string;
    }
  }

  export interface WorkersSteppedMigrations {
    /**
     * Tag to set as the latest migration tag.
     */
    new_tag?: string;

    /**
     * Tag used to verify against the latest migration tag for this Worker. If they
     * don't match, the upload is rejected.
     */
    old_tag?: string;

    /**
     * Migrations to apply in order.
     */
    steps?: Array<WorkersSteppedMigrations.Step>;
  }

  export namespace WorkersSteppedMigrations {
    export interface Step {
      /**
       * A list of classes to delete Durable Object namespaces from.
       */
      deleted_classes?: Array<string>;

      /**
       * A list of classes to create Durable Object namespaces from.
       */
      new_classes?: Array<string>;

      /**
       * A list of classes with Durable Object namespaces that were renamed.
       */
      renamed_classes?: Array<Step.RenamedClass>;

      /**
       * A list of transfers for Durable Object namespaces from a different Worker and
       * class to a class defined in this Worker.
       */
      transferred_classes?: Array<Step.TransferredClass>;
    }

    export namespace Step {
      export interface RenamedClass {
        from?: string;

        to?: string;
      }

      export interface TransferredClass {
        from?: string;

        from_script?: string;

        to?: string;
      }
    }
  }

  export interface Placement {
    /**
     * Enables
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     * Only `"smart"` is currently supported
     */
    mode?: 'smart';
  }

  /**
   * A reference to a script that will consume logs from the attached Worker.
   */
  export interface TailConsumer {
    /**
     * Name of Worker that is to be the consumer.
     */
    service: string;

    /**
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;

    /**
     * Optional dispatch namespace the script belongs to.
     */
    namespace?: string;
  }
}

export interface SettingUpdateParams {
  errors: Array<SettingUpdateParams.Error>;

  messages: Array<SettingUpdateParams.Message>;

  result: SettingUpdateParams.Result;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace SettingUpdateParams {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * List of bindings attached to this Worker
     */
    bindings?: Array<
      | Result.WorkersKvNamespaceBinding
      | Result.WorkersServiceBinding
      | Result.WorkersDoBinding
      | Result.WorkersR2Binding
      | Result.WorkersQueueBinding
      | Result.WorkersD1Binding
      | Result.WorkersDispatchNamespaceBinding
      | Result.WorkersMtlsCertBinding
    >;

    /**
     * Opt your Worker into changes after this date
     */
    compatibility_date?: string;

    /**
     * Opt your Worker into specific changes
     */
    compatibility_flags?: Array<string>;

    /**
     * Whether Logpush is turned on for the Worker.
     */
    logpush?: boolean;

    /**
     * Migrations to apply for Durable Objects associated with this Worker.
     */
    migrations?: Result.WorkersSingleStepMigrations | Result.WorkersSteppedMigrations;

    placement?: Result.Placement;

    /**
     * Tags to help you manage your Workers
     */
    tags?: Array<string>;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<Result.TailConsumer>;

    /**
     * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
     */
    usage_model?: string;
  }

  export namespace Result {
    export interface WorkersKvNamespaceBinding {
      /**
       * The class of resource that the binding provides.
       */
      type: 'kv_namespace';
    }

    export interface WorkersServiceBinding {
      /**
       * Optional environment if the Worker utilizes one.
       */
      environment: string;

      /**
       * Name of Worker to bind to
       */
      service: string;

      /**
       * The class of resource that the binding provides.
       */
      type: 'service';
    }

    export interface WorkersDoBinding {
      /**
       * The exported class name of the Durable Object
       */
      class_name: string;

      /**
       * The class of resource that the binding provides.
       */
      type: 'durable_object_namespace';

      /**
       * The environment of the script_name to bind to
       */
      environment?: string;

      /**
       * The script where the Durable Object is defined, if it is external to this Worker
       */
      script_name?: string;
    }

    export interface WorkersR2Binding {
      /**
       * R2 bucket to bind to
       */
      bucket_name: string;

      /**
       * The class of resource that the binding provides.
       */
      type: 'r2_bucket';
    }

    export interface WorkersQueueBinding {
      /**
       * Name of the Queue to bind to
       */
      queue_name: string;

      /**
       * The class of resource that the binding provides.
       */
      type: 'queue';
    }

    export interface WorkersD1Binding {
      /**
       * ID of the D1 database to bind to
       */
      id: string;

      /**
       * The name of the D1 database associated with the 'id' provided.
       */
      name: string;

      /**
       * The class of resource that the binding provides.
       */
      type: 'd1';
    }

    export interface WorkersDispatchNamespaceBinding {
      /**
       * Namespace to bind to
       */
      namespace: string;

      /**
       * The class of resource that the binding provides.
       */
      type: 'dispatch_namespace';

      /**
       * Outbound worker
       */
      outbound?: WorkersDispatchNamespaceBinding.Outbound;
    }

    export namespace WorkersDispatchNamespaceBinding {
      /**
       * Outbound worker
       */
      export interface Outbound {
        /**
         * Pass information from the Dispatch Worker to the Outbound Worker through the
         * parameters
         */
        params?: Array<string>;

        /**
         * Outbound worker
         */
        worker?: Outbound.Worker;
      }

      export namespace Outbound {
        /**
         * Outbound worker
         */
        export interface Worker {
          /**
           * Environment of the outbound worker
           */
          environment?: string;

          /**
           * Name of the outbound worker
           */
          service?: string;
        }
      }
    }

    export interface WorkersMtlsCertBinding {
      /**
       * The class of resource that the binding provides.
       */
      type: 'mtls_certificate';

      /**
       * ID of the certificate to bind to
       */
      certificate_id?: string;
    }

    /**
     * A single set of migrations to apply.
     */
    export interface WorkersSingleStepMigrations {
      /**
       * A list of classes to delete Durable Object namespaces from.
       */
      deleted_classes?: Array<string>;

      /**
       * A list of classes to create Durable Object namespaces from.
       */
      new_classes?: Array<string>;

      /**
       * Tag to set as the latest migration tag.
       */
      new_tag?: string;

      /**
       * Tag used to verify against the latest migration tag for this Worker. If they
       * don't match, the upload is rejected.
       */
      old_tag?: string;

      /**
       * A list of classes with Durable Object namespaces that were renamed.
       */
      renamed_classes?: Array<WorkersSingleStepMigrations.RenamedClass>;

      /**
       * A list of transfers for Durable Object namespaces from a different Worker and
       * class to a class defined in this Worker.
       */
      transferred_classes?: Array<WorkersSingleStepMigrations.TransferredClass>;
    }

    export namespace WorkersSingleStepMigrations {
      export interface RenamedClass {
        from?: string;

        to?: string;
      }

      export interface TransferredClass {
        from?: string;

        from_script?: string;

        to?: string;
      }
    }

    export interface WorkersSteppedMigrations {
      /**
       * Tag to set as the latest migration tag.
       */
      new_tag?: string;

      /**
       * Tag used to verify against the latest migration tag for this Worker. If they
       * don't match, the upload is rejected.
       */
      old_tag?: string;

      /**
       * Migrations to apply in order.
       */
      steps?: Array<WorkersSteppedMigrations.Step>;
    }

    export namespace WorkersSteppedMigrations {
      export interface Step {
        /**
         * A list of classes to delete Durable Object namespaces from.
         */
        deleted_classes?: Array<string>;

        /**
         * A list of classes to create Durable Object namespaces from.
         */
        new_classes?: Array<string>;

        /**
         * A list of classes with Durable Object namespaces that were renamed.
         */
        renamed_classes?: Array<Step.RenamedClass>;

        /**
         * A list of transfers for Durable Object namespaces from a different Worker and
         * class to a class defined in this Worker.
         */
        transferred_classes?: Array<Step.TransferredClass>;
      }

      export namespace Step {
        export interface RenamedClass {
          from?: string;

          to?: string;
        }

        export interface TransferredClass {
          from?: string;

          from_script?: string;

          to?: string;
        }
      }
    }

    export interface Placement {
      /**
       * Enables
       * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
       * Only `"smart"` is currently supported
       */
      mode?: 'smart';
    }

    /**
     * A reference to a script that will consume logs from the attached Worker.
     */
    export interface TailConsumer {
      /**
       * Name of Worker that is to be the consumer.
       */
      service: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;

      /**
       * Optional dispatch namespace the script belongs to.
       */
      namespace?: string;
    }
  }
}

export namespace Settings {
  export import SettingRetrieveResponse = SettingsAPI.SettingRetrieveResponse;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}