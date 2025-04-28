function CategoryButton({ category, onClickFunc }) {

    return (
        <>
            <button onClick={() => onClickFunc(category)}>{category}</button>
        </>
    );
}

export default CategoryButton;
