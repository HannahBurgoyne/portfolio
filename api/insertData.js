import Redis from 'ioredis'

async function insertData() {
  const redis = new Redis({
    host: process.env.REDIS_HOST, // Get this from your Vercel environment variables
    port: process.env.REDIS_PORT, // Get this from your Vercel environment variables
    password: process.env.REDIS_PASSWORD, // Get this from your Vercel environment variables
  })

  try {
    // Read your JSON data
    const jsonData = require('./server/data/data.json') // Make sure the path is correct

    // Insert the data into the KV store
    await redis.set('data', JSON.stringify(jsonData))

    console.log('Data inserted into the KV store successfully')
  } catch (error) {
    console.error('Error inserting data into the KV store:', error)
  } finally {
    // Close the Redis connection when done
    redis.quit()
  }
}

// Call the function to insert the data
insertData()
