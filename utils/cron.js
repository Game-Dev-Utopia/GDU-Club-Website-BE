import cron from 'node-cron'
import axios from 'axios'

cron.schedule('*/5 * * * *', async () => {
  try {
    const res = await axios.get('https://gdu-club-website-be.onrender.com/ping')
    console.log(res.data)
  } catch (error) {
    console.error(error)
  }
})