import { Article,CodingSkills,SkillsTitle } from "./Article.jsx";
import { List } from "../base/List.jsx";

export function SkillsContent({data}) {
    // const tools = [
    //     "Visual Studio Code",
    //     "IntelliJ",
    //     "Android Studio",
    //     "Eclipse",
    //     "MySQL Workbench"
    // ];

    // const etc = [
    //     "Git",
    //     "Scrum Master",
    //     "SVN"
    // ]
    
    
    return (
        <div className="skills">
        <Article style="skills-coding">
            <SkillsTitle title = "Coding Skills"/>
            <CodingSkills skills= {data.coding}/>        
        </Article>
        
        <Article style="skills-tools" >
            <SkillsTitle title = "Tools"/>
            <List titles={data.tools}/>
        </Article>

        <Article style="skills-etc" >
            <SkillsTitle title = "Etc"/>
            <List titles= {data.etc}/>
        </Article>
        </div>
    );
}