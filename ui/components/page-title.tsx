interface Props {
 content: string;
}

const PageTitle = ({ content } : Props) => {
  return (<>
      <div class={"bg-black text-white p-5 transform -skew-y-2 -mt-5"}>
        <h3 class="transform ml-6">{content}</h3>
      </div>
    </>
  );
};

export default PageTitle;
