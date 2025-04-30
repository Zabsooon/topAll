function Generator({ inputs }) {
    const filterInputs = (inputs, category) => {
        return inputs
            .filter((e) => e.typeid === category)
            .map((e) => e.fields);
    };

    const renderFields = (fields, Tag) => {
        return fields.map((field, index) => (
            <div key={index}>
                {Object.entries(field).map(([key, value]) => (
                    <Tag key={key}>
                        {key}: {value}
                    </Tag>
                ))}
            </div>
        ));
    };

    return (
        <>
            {renderFields(filterInputs(inputs, 'general'), 'h2')}
            {renderFields(filterInputs(inputs, 'education'), 'h3')}
            {renderFields(filterInputs(inputs, 'experience'), 'h5')}
        </>
    );
}

export default Generator;
