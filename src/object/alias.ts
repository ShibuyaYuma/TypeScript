export default function typeAliasSample(){

    type Country = {
        capital: string
        language: string
        name: string
    }
    
    const japan: Country = {
        capital: "Tokyo",
        language: "Japanese",
        name: "Japan"
    }

    const america: Country = {
        capital: "D.C.",
        language: "English",
        name: "USA"
    }

    console.log("Object alias sample 1:", japan);
    console.log("Object alias sample 2:", america);

    //合併型(union)と交差型(intersection)
    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }

    //合併型... KnightまたはWizardの型をもつ
    type Adventure = Knight | Wizard

    //交差型... KnightかつWizardの型をもつ
    type Paladin = Knight & Wizard

    //Knight寄りの冒険者
    const adventure1: Adventure = {
        hp: 100,
        sp: 30,
        weapon: "木の剣",
        swordSkill: "三連斬り",
        //magicSkill: "ファイアボール" 一応Wizardの型も持てる(エラーにはならないが推奨しない)
    }

    //Wizard寄りの冒険者
    const adventure2: Adventure = {
        hp: 100,
        mp: 30,
        weapon: "木の杖",
        magicSkill: "ファイアボール"
    }

    console.log("Object alias sample 3:", adventure1);
    console.log("Object alias sample 4:", adventure2);

    const paladin: Paladin = { //交差型は、hp,sp,mp,weapon,swordskill,magicskillすべてを持つ必要がある
        hp: 300,
        sp: 100,
        mp: 100,
        weapon: "銀の剣",
        swordSkill: "三連斬り",
        magicSkill: "ファイアボール"
    }

    console.log("Object alias sample 5:", paladin);
}


