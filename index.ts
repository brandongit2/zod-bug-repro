import {z, type ZodType} from 'zod';

export const iGraphConnectionEdgeSchema = <ObjectType extends Record<string, unknown>>(
	objectTypeSchema: ZodType<ObjectType>,
) =>
	z.object({
		node: objectTypeSchema,
	});
