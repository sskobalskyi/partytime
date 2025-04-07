import { OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { NextResponse } from 'next/server';
import { ActivitySchema } from '@/schemas/activity';

const registry = new OpenAPIRegistry();

registry.register('ActivityTemplate', ActivitySchema);

registry.registerPath({
    method: 'get',
    path: '/api/activities',
    summary: 'List all activity templates',
    responses: {
        200: {
            description: 'Successful response',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/ActivityTemplate' },
                    },
                },
            },
        },
    },
});

registry.registerPath({
    method: 'post',
    path: '/api/activities',
    summary: 'Create a new activity template',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/ActivityTemplate',
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Activity template created successfully',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/ActivityTemplate',
                    },
                },
            },
        },
    },
});

export async function GET() {
    const generator = new OpenApiGeneratorV3(registry.definitions);
    const doc = generator.generateDocument({
        openapi: '3.0.0',
        info: {
            title: 'PartyTime API',
            version: '1.0.0',
        },
        servers: [{ url: 'http://localhost:3000' }],
    });

    return NextResponse.json(doc);
}
