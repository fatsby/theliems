import Divider from "../Divider";
import Card from "../Card";

function TheLiems() {
    return (
        <div id="theliems">

            <Divider name="SCHOOL OF CIT" />
            <div className='flex flex-wrap justify-center gap-10 mt-6'>
                <Card
                    name="Vũ Đức Lý"
                    subject="CSE205" imageURL="https://placehold.co/150" />
                <Card
                    name="Nguyễn Ngọc Thanh"
                    subject="CSE204" imageURL="https://placehold.co/150" />
                <Card
                    name="Huỳnh Tấn Phước"
                    subject="CSE204" imageURL="https://placehold.co/150" />
                <Card
                    name="Phan Văn Tài"
                    subject="ex-CSE203" imageURL="https://placehold.co/150" />
                
            </div>

            <div className="mt-14">
                <Divider
                    name="SCHOOL OF GENERAL EDUCATION" />
                <div className='flex flex-wrap justify-center gap-10 mt-6'>
                    <Card
                        name="Nguyễn Hữu Phước"
                        subject="PHYSICS" imageURL="https://placehold.co/150" />
                    <Card
                        name="Phan Văn Thưởng"
                        subject="PHYSICS" imageURL="https://placehold.co/150" />
                    <Card
                        name="Ngô Thu Lương"
                        subject="MATH" imageURL="https://placehold.co/150" />
                    <Card
                        name="Huỳnh Tấn Liêm"
                        subject="RETIRED" imageURL="https://placehold.co/150" /> 
                    <Card
                        name="Lê Công Võ"
                        subject="MATH" imageURL="https://placehold.co/150" /> 
                    <Card
                        name="Lê Nguyễn Viết Tường"
                        subject="MATH" imageURL="https://placehold.co/150" /> 
                </div>
            </div>

            <div className="mt-14">
                <Divider
                    name="SCHOOL OF BUSINESS" />
                <div className='flex flex-wrap justify-center gap-10 mt-6 text-center'>
                    <h1>Coming soon... <br></br> Nominate your teacher.</h1>
                </div>
            </div>

            <div className="mt-14">
                <Divider
                    name="SCHOOL OF ENGINEERING" />
                <div className='flex flex-wrap justify-center gap-10 mt-6 text-center'>
                    <h1>Coming soon... <br></br> Nominate your teacher.</h1>
                </div>
            </div>

            <div className="mt-14">
                <Divider
                    name="SCHOOL OF NURSING" />
                <div className='flex flex-wrap justify-center gap-10 mt-6 text-center'>
                    <h1>Coming soon... <br></br> Nominate your teacher.</h1>
                </div>
            </div>

            <div className="mt-14">
                <Divider
                    name="FOREIGN LANGUAGE CENTER" />
                <div className='flex flex-wrap justify-center gap-10 mt-6'>
                    <Card
                        name="Patrick Irwin"
                        subject="Vice President" imageURL="https://placehold.co/150" />
                    <Card
                        name="Andrew Moore"
                        subject="Head of Level 5" imageURL="https://placehold.co/150" />
                    <Card
                        name="Mudge Ben Joseph"
                        subject="Head of Level 4" imageURL="https://placehold.co/150" />
                    <Card
                        name="David Marsland"
                        subject="Head of Level 3" imageURL="https://placehold.co/150" /> 
                    <Card
                        name="William Hannigan"
                        subject="Head of Level 2" imageURL="https://placehold.co/150" /> 
                    
                </div>
            </div>

        </div>
    );
}
export default TheLiems;
