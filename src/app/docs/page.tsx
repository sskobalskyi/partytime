'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useEffect, useState } from 'react';

export default function DocsPage() {
    const [spec, setSpec] = useState<any>(null);

    useEffect(() => {
        fetch('/api/docs')
            .then((res) => res.json())
            .then(setSpec);
    }, []);

    if (!spec) return <p className="p-4">Loading docs...</p>;

    return <SwaggerUI spec={spec} />;
}