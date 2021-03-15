import categories from '../categories'
const Navbar = ({ onClick }) => {
  return (
    <div className='scrolling-container mb-4 py-3'>
      {categories &&
        categories.map((category, index) => (
          <button
            type='button'
            className='btn btn-dark mr-3 text-capitalize'
            key={index}
            value={category.name}
            onClick={onClick}
          >
            {category.name}
          </button>
        ))}
    </div>
  )
}

export default Navbar
