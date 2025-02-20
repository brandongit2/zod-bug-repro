import {z, type ZodType} from 'zod';

export const schemaFactory = <ObjectType>(objectTypeSchema: ZodType<ObjectType>) => z.object({node: objectTypeSchema});
