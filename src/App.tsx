import { motion } from 'framer-motion'

function App() {
  return (
    <div className="film-grain min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-bone mb-4">
          Yassine Nfouh
        </h1>
        <p className="text-xl text-ash">
          AI Developer & Creative Designer
        </p>
        <div className="mt-6 w-16 h-1 bg-vermillion mx-auto rounded-full" />
      </motion.div>
    </div>
  )
}

export default App
