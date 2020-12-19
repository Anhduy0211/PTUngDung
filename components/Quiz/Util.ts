
export const _ =(array:any[]) =>[...array].sort(()=>Math.random()-0.7);

export enum Difficluty{
    EASY="easy",
    MEDIUM= "medium",
    HARD="hard",
}
export type Question={
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
    type:string
}
export enum Kind{
Animal=27

}
export type QuestionState = Question& {answers:string[]};

export const getQuizQuestions = async(amount:number,difficluty:Difficluty,category:Kind)=>{
    const endpoints = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficluty=${difficluty}&type=multiple`;
    const data = await (await fetch(endpoints)).json()
    console.log(data)
  return data.results.map((question:Question) =>({
      ...question,
      answers: _([...question.incorrect_answers,question.correct_answer])
  })
  );
}
export function unicodeToChar(text:{text:string}){
    return text;
}