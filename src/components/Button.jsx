const Button = ({ children, type = 'button' }) => {
  return (
    <button
      type={type}
      className="w-full bg-white text-blue-600 font-semibold py-2 rounded-md hover:bg-gray-100"
    >
      {children}
    </button>
  )
}

export default Button
