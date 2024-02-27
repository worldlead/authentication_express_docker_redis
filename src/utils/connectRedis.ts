import { createClient } from 'redis'

const redisUrl = `redis://localhost:6400`
const redisClient = createClient({
    url: redisUrl,
})

const connectRedis = async () => {
    try {
        await redisClient.connect()
        console.log('Redis client connected...')
    } catch (error: any) {
        console.log(error.message)
        setTimeout(connectRedis, 5000)
    }
}

connectRedis()

redisClient.on('error', (err: any) => console.log(err))

export default redisClient