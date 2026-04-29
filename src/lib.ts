import { request } from '@octokit/request';

import { RequestDetails } from './schema';

export async function getIssueDescription(
  issue: number,
  requestDefaults: RequestDetails
): Promise<string> {
  return (
    (
      await request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
        ...requestDefaults,
        issue_number: issue,
      })
    ).data.body || ''
  );
}

export async function getIssueComments(
  issue: number,
  requestDefaults: RequestDetails
) {
  return request('GET /repos/{owner}/{repo}/issues/{issue_number}/comments', {
    ...requestDefaults,
    issue_number: issue,
    per_page: 100,
  });
}
