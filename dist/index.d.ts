import { z, type ZodType } from 'zod';
export declare const schemaFactory: <ObjectType>(objectTypeSchema: ZodType<ObjectType>) => z.ZodObject<{
    node: z.ZodType<ObjectType, z.ZodTypeDef, ObjectType>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    node: z.ZodType<ObjectType, z.ZodTypeDef, ObjectType>;
}>, any> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    node: z.ZodType<ObjectType, z.ZodTypeDef, ObjectType>;
}>, any>[k]; } : never, z.baseObjectInputType<{
    node: z.ZodType<ObjectType, z.ZodTypeDef, ObjectType>;
}> extends infer T_1 ? { [k_1 in keyof T_1]: z.baseObjectInputType<{
    node: z.ZodType<ObjectType, z.ZodTypeDef, ObjectType>;
}>[k_1]; } : never>;
