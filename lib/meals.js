import  sql from 'better-sqlite3'
const db = sql('meals.db')

export async function getMealsFromDatabase(){
    await new Promise((resolve)=>setTimeout(resolve,5000))
    // throw new Error('db not found')
    return db.prepare('SELECT * FROM meals').all()
}