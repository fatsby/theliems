function Divider({ name}) {
    return (
      <span className="relative flex justify-center">
        {/* Gradient Line */}
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70"></div>
  
        {/* Centered Text */}
        <span className="relative z-10 bg-[#0a0a0a] px-6 text-xl font-bold text-yellow-200">
            {name}
        
        </span>
      </span>
    );
  }
  
  export default Divider;
  