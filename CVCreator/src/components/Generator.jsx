import '../styles/Generator.css';

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
        <div className="generator">
            <div className="generalinfo">
                {renderFields(filterInputs(inputs, 'general'), 'p')}
            </div>
            <div className="educationinfo">
                {renderFields(filterInputs(inputs, 'education'), 'p')}
            </div>
            <div className="experienceinfo"> 
                {renderFields(filterInputs(inputs, 'experience'), 'p')}
            </div>
        </div>
    );
}

export default Generator;
