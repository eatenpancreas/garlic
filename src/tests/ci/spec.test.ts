import { describe, it, expect } from 'vitest';
import Spec from '../../../spec.yml';

describe('CI', () => {
	it('GET endpoints should never have request bodies', () => {
		const getEndpointsWithBodies = [];

		for (const path in Spec.paths) {
			const pathObj = Spec.paths[path];
			if (pathObj.get && pathObj.get.requestBody) {
				getEndpointsWithBodies.push(path);
			}
		}

		expect(getEndpointsWithBodies, 'Found GET endpoints with request bodies').toEqual([]);
	});
});
