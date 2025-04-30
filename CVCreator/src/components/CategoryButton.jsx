import '../styles/CategoryButton.css';

function CategoryButton({ category, onClickFunc }) {

    return (
        <>
            <button className="categoryButton" onClick={() => onClickFunc(category)}>
                {category}
            </button>
        </>
    );
}

export default CategoryButton;
