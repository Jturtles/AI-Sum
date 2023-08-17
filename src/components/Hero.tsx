import logo from "@/assets/logo.svg";


const Hero = () => {
  return (
    <header
      className='w-full flex justify-center items-center flex-col'
    >
      <nav
        className='flex justify-between items-center w-full mb-10 pt-3'
      >
        <img src={logo} alt='sumz_logo' className='xl:w-40 w-28 object-contain'/>

        <button
          type='button'
          onClick={() => {
            window.open('https://github.com/Jturtles')
          }}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Simplify and save time on your readings with Summarize, an open-source article summarizer
        that will give you all the important details of lengthy articles so you don't have to spend
        your time digging and finding the main points.
      </h2>
    </header>
  )
}

export default Hero