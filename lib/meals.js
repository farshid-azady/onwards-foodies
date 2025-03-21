import  sql from 'better-sqlite3'
const db = sql('meals')

export function getMealsFromDatabase(){
    return db.prepare('SELECT * FROM meals').all()
}