// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as JobsAPI from 'cloudflare/resources/logpush/jobs';

export class Jobs extends APIResource {
  /**
   * Gets the details of a Logpush job.
   */
  retrieve(
    accountOrZone: string,
    accountOrZoneId: string,
    jobId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobRetrieveResponse | null> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/logpush/jobs/${jobId}`,
        options,
      ) as Core.APIPromise<{ result: JobRetrieveResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a Logpush job.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    jobId: number,
    body: JobUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobUpdateResponse | null> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/logpush/jobs/${jobId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: JobUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a Logpush job.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: string,
    jobId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobDeleteResponse | null> {
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/logpush/jobs/${jobId}`,
        options,
      ) as Core.APIPromise<{ result: JobDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface JobRetrieveResponse {
  /**
   * Unique id of the job.
   */
  id?: number;

  /**
   * Name of the dataset.
   */
  dataset?: string | null;

  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf?: string;

  /**
   * Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * If not null, the job is currently failing. Failures are usually repetitive
   * (example: no permissions to write to destination bucket). Only the last failure
   * is recorded. On successful execution of a job the error_message and last_error
   * are set to null.
   */
  error_message?: string | null;

  /**
   * The frequency at which Cloudflare sends batches of logs to your destination.
   * Setting frequency to high sends your logs in larger quantities of smaller files.
   * Setting frequency to low sends logs in smaller quantities of larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * Records the last time for which logs have been successfully pushed. If the last
   * successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z
   * then the value of this field will be 2018-07-23T10:01:00Z. If the job has never
   * run or has just been enabled and hasn't run yet then the field will be empty.
   */
  last_complete?: string | null;

  /**
   * Records the last time the job failed. If not null, the job is currently failing.
   * If null, the job has either never failed or has run successfully at least once
   * since last failure. See also the error_message field.
   */
  last_error?: string | null;

  /**
   * This field is deprecated. Use `output_options` instead. Configuration string. It
   * specifies things like requested fields and timestamp formats. If migrating from
   * the logpull api, copy the url (full url or just the query string) of your call
   * here, and logpush will keep on making this call for you, setting start and end
   * times appropriately.
   */
  logpull_options?: string | null;

  /**
   * Optional human readable job name. Not unique. Cloudflare suggests that you set
   * this to a meaningful string, like the domain name, to make it easier to identify
   * your job.
   */
  name?: string | null;

  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  output_options?: JobRetrieveResponse.OutputOptions | null;
}

export namespace JobRetrieveResponse {
  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  export interface OutputOptions {
    /**
     * String to be prepended before each batch.
     */
    batch_prefix?: string | null;

    /**
     * String to be appended after each batch.
     */
    batch_suffix?: string | null;

    /**
     * If set to true, will cause all occurrences of `${` in the generated files to be
     * replaced with `x{`.
     */
    'CVE-2021-4428'?: boolean | null;

    /**
     * String to join fields. This field be ignored when `record_template` is set.
     */
    field_delimiter?: string | null;

    /**
     * List of field names to be included in the Logpush output. For the moment, there
     * is no option to add all fields at once, so you must specify all the fields names
     * you are interested in.
     */
    field_names?: Array<string>;

    /**
     * Specifies the output type, such as `ndjson` or `csv`. This sets default values
     * for the rest of the settings, depending on the chosen output type. Some
     * formatting rules, like string quoting, are different between output types.
     */
    output_type?: 'ndjson' | 'csv';

    /**
     * String to be inserted in-between the records as separator.
     */
    record_delimiter?: string | null;

    /**
     * String to be prepended before each record.
     */
    record_prefix?: string | null;

    /**
     * String to be appended after each record.
     */
    record_suffix?: string | null;

    /**
     * String to use as template for each record instead of the default comma-separated
     * list. All fields used in the template must be present in `field_names` as well,
     * otherwise they will end up as null. Format as a Go `text/template` without any
     * standard functions, like conditionals, loops, sub-templates, etc.
     */
    record_template?: string | null;

    /**
     * Floating number to specify sampling rate. Sampling is applied on top of
     * filtering, and regardless of the current `sample_interval` of the data.
     */
    sample_rate?: number | null;

    /**
     * String to specify the format for timestamps, such as `unixnano`, `unix`, or
     * `rfc3339`.
     */
    timestamp_format?: 'unixnano' | 'unix' | 'rfc3339';
  }
}

export interface JobUpdateResponse {
  /**
   * Unique id of the job.
   */
  id?: number;

  /**
   * Name of the dataset.
   */
  dataset?: string | null;

  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf?: string;

  /**
   * Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * If not null, the job is currently failing. Failures are usually repetitive
   * (example: no permissions to write to destination bucket). Only the last failure
   * is recorded. On successful execution of a job the error_message and last_error
   * are set to null.
   */
  error_message?: string | null;

  /**
   * The frequency at which Cloudflare sends batches of logs to your destination.
   * Setting frequency to high sends your logs in larger quantities of smaller files.
   * Setting frequency to low sends logs in smaller quantities of larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * Records the last time for which logs have been successfully pushed. If the last
   * successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z
   * then the value of this field will be 2018-07-23T10:01:00Z. If the job has never
   * run or has just been enabled and hasn't run yet then the field will be empty.
   */
  last_complete?: string | null;

  /**
   * Records the last time the job failed. If not null, the job is currently failing.
   * If null, the job has either never failed or has run successfully at least once
   * since last failure. See also the error_message field.
   */
  last_error?: string | null;

  /**
   * This field is deprecated. Use `output_options` instead. Configuration string. It
   * specifies things like requested fields and timestamp formats. If migrating from
   * the logpull api, copy the url (full url or just the query string) of your call
   * here, and logpush will keep on making this call for you, setting start and end
   * times appropriately.
   */
  logpull_options?: string | null;

  /**
   * Optional human readable job name. Not unique. Cloudflare suggests that you set
   * this to a meaningful string, like the domain name, to make it easier to identify
   * your job.
   */
  name?: string | null;

  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  output_options?: JobUpdateResponse.OutputOptions | null;
}

export namespace JobUpdateResponse {
  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  export interface OutputOptions {
    /**
     * String to be prepended before each batch.
     */
    batch_prefix?: string | null;

    /**
     * String to be appended after each batch.
     */
    batch_suffix?: string | null;

    /**
     * If set to true, will cause all occurrences of `${` in the generated files to be
     * replaced with `x{`.
     */
    'CVE-2021-4428'?: boolean | null;

    /**
     * String to join fields. This field be ignored when `record_template` is set.
     */
    field_delimiter?: string | null;

    /**
     * List of field names to be included in the Logpush output. For the moment, there
     * is no option to add all fields at once, so you must specify all the fields names
     * you are interested in.
     */
    field_names?: Array<string>;

    /**
     * Specifies the output type, such as `ndjson` or `csv`. This sets default values
     * for the rest of the settings, depending on the chosen output type. Some
     * formatting rules, like string quoting, are different between output types.
     */
    output_type?: 'ndjson' | 'csv';

    /**
     * String to be inserted in-between the records as separator.
     */
    record_delimiter?: string | null;

    /**
     * String to be prepended before each record.
     */
    record_prefix?: string | null;

    /**
     * String to be appended after each record.
     */
    record_suffix?: string | null;

    /**
     * String to use as template for each record instead of the default comma-separated
     * list. All fields used in the template must be present in `field_names` as well,
     * otherwise they will end up as null. Format as a Go `text/template` without any
     * standard functions, like conditionals, loops, sub-templates, etc.
     */
    record_template?: string | null;

    /**
     * Floating number to specify sampling rate. Sampling is applied on top of
     * filtering, and regardless of the current `sample_interval` of the data.
     */
    sample_rate?: number | null;

    /**
     * String to specify the format for timestamps, such as `unixnano`, `unix`, or
     * `rfc3339`.
     */
    timestamp_format?: 'unixnano' | 'unix' | 'rfc3339';
  }
}

export type JobDeleteResponse = unknown | Array<unknown> | string;

export interface JobUpdateParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf?: string;

  /**
   * Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * The frequency at which Cloudflare sends batches of logs to your destination.
   * Setting frequency to high sends your logs in larger quantities of smaller files.
   * Setting frequency to low sends logs in smaller quantities of larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * This field is deprecated. Use `output_options` instead. Configuration string. It
   * specifies things like requested fields and timestamp formats. If migrating from
   * the logpull api, copy the url (full url or just the query string) of your call
   * here, and logpush will keep on making this call for you, setting start and end
   * times appropriately.
   */
  logpull_options?: string | null;

  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  output_options?: JobUpdateParams.OutputOptions | null;

  /**
   * Ownership challenge token to prove destination ownership.
   */
  ownership_challenge?: string;
}

export namespace JobUpdateParams {
  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  export interface OutputOptions {
    /**
     * String to be prepended before each batch.
     */
    batch_prefix?: string | null;

    /**
     * String to be appended after each batch.
     */
    batch_suffix?: string | null;

    /**
     * If set to true, will cause all occurrences of `${` in the generated files to be
     * replaced with `x{`.
     */
    'CVE-2021-4428'?: boolean | null;

    /**
     * String to join fields. This field be ignored when `record_template` is set.
     */
    field_delimiter?: string | null;

    /**
     * List of field names to be included in the Logpush output. For the moment, there
     * is no option to add all fields at once, so you must specify all the fields names
     * you are interested in.
     */
    field_names?: Array<string>;

    /**
     * Specifies the output type, such as `ndjson` or `csv`. This sets default values
     * for the rest of the settings, depending on the chosen output type. Some
     * formatting rules, like string quoting, are different between output types.
     */
    output_type?: 'ndjson' | 'csv';

    /**
     * String to be inserted in-between the records as separator.
     */
    record_delimiter?: string | null;

    /**
     * String to be prepended before each record.
     */
    record_prefix?: string | null;

    /**
     * String to be appended after each record.
     */
    record_suffix?: string | null;

    /**
     * String to use as template for each record instead of the default comma-separated
     * list. All fields used in the template must be present in `field_names` as well,
     * otherwise they will end up as null. Format as a Go `text/template` without any
     * standard functions, like conditionals, loops, sub-templates, etc.
     */
    record_template?: string | null;

    /**
     * Floating number to specify sampling rate. Sampling is applied on top of
     * filtering, and regardless of the current `sample_interval` of the data.
     */
    sample_rate?: number | null;

    /**
     * String to specify the format for timestamps, such as `unixnano`, `unix`, or
     * `rfc3339`.
     */
    timestamp_format?: 'unixnano' | 'unix' | 'rfc3339';
  }
}

export namespace Jobs {
  export import JobRetrieveResponse = JobsAPI.JobRetrieveResponse;
  export import JobUpdateResponse = JobsAPI.JobUpdateResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
}