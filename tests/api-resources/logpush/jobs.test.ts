// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.logpush.jobs.create({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      account_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.logpush.jobs.create({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      account_id: 'string',
      dataset: 'http_requests',
      enabled: false,
      frequency: 'high',
      kind: 'edge',
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
      max_upload_bytes: 5000000,
      max_upload_interval_seconds: 30,
      max_upload_records: 1000,
      name: 'example.com',
      output_options: {
        'CVE-2021-4428': true,
        batch_prefix: 'string',
        batch_suffix: 'string',
        field_delimiter: 'string',
        field_names: ['ClientIP', 'EdgeStartTimestamp', 'RayID'],
        output_type: 'ndjson',
        record_delimiter: 'string',
        record_prefix: 'string',
        record_suffix: 'string',
        record_template: 'string',
        sample_rate: 0,
        timestamp_format: 'unixnano',
      },
      ownership_challenge: '00000000000000000000',
    });
  });

  // TODO: investigate broken test
  test.skip('update', async () => {
    const responsePromise = cloudflare.logpush.jobs.update(1, { account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = cloudflare.logpush.jobs.list({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete', async () => {
    const responsePromise = cloudflare.logpush.jobs.delete(1, { account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = cloudflare.logpush.jobs.get(1, { account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
