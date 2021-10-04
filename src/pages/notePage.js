import React, {useState} from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    Avatar,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    ConversationHeader,
    MessageSeparator,
    Sidebar,
    Conversation,
    Search,
    ConversationList
  } from "@chatscope/chat-ui-kit-react";
import userImage from '../assets/user.png';
import { useRouteMatch } from "react-router";
//https://github.com/chatscope/chat-ui-kit-react
//https://github.com/chatscope/use-chat

const NotePage = () => {

    const conversations = [
        { id: 0, name: "test" },
        { id: 1, name: "ing" },
        { id: 2, name: "please" }
      ];
      
    const messages = {
    0: [
        {message: "아아 테스트중"}
    ],
    1: [
        { message: "헤이 모두들 안녕 내가 누군지 아니?"}, 
        { message: "김보경이다! 김보경이다!", direction: "outgoing", position: "single"}
    ],
    2: [
        { message: "안녕하세요 최강무적 FRONTEND 팀입니다."}, 
        { message: "기대할게요", direction: "outgoing", position: "single"}
    ]
    }

    const [messageInputValue, setMessageInputValue] = useState("");
    const [currentConversation, setCurrentConversation] = useState(0);

    return (

        <div style={{ position: "relative", padding: "100px",height: "500px" , display:"flex", justifyContent:"center"}}>
            <MainContainer responsive style={{ width: "800px",border:"1px solid grey", borderRadius:"8px" }}>
            <Sidebar position="left" scrollable={false}>
                <Search placeholder="Recent..." disabled />
                <ConversationList>
                    {conversations.map( c => <Conversation key={c.id} name={c.name} info={"example"} lastSenderName={"lastSenderName"}
                                         onClick={() => setCurrentConversation(c.id)} >
                                             <Avatar src={userImage}></Avatar></Conversation>)  }
                </ConversationList> 
            </Sidebar>
            <ChatContainer>
            <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={userImage} name="Me" />
            <ConversationHeader.Content userName="Nickname"/>
            </ConversationHeader>
            {/* <MessageList >
                <Message
                    //style={{backgroundColor:"red"}}
                    model={{
                    direction: "incoming",
                    message: "이거 아직 판매중인가요?",
                    sentTime: "just now",
                    sender: "Nickname",
                    }}
                    avatarPosition="tl"
                >
                    <Avatar src={userImage} name="Akane" />
                </Message>
                
                <Message
                    model={{
                    direction: "incoming"
                    }}
                    avatarPosition="tl"
                    >
                    <Avatar src={userImage} name="Akane" />
                    <Message.ImageContent
                    src={'https://t1.daumcdn.net/cfile/tistory/9971AC345CF98AF713'}
                    alt="덕성 굿즈"
                    width={200}
                    />
                </Message>
                <MessageSeparator content="Saturday, 30 November 2019" />
                <Message
                model={{
                    message: "안돼. 돌아가",
                    sentTime: "15 mins ago",
                    // sener: localSender,
                    direction: "outgoing",
                    position: "single"
                }}
                />
            </MessageList> */}
            <MessageList>
                { currentConversation && messages[currentConversation].map((m,idx) => <Message key={idx} model={m} />)}
            </MessageList>
            <MessageInput placeholder="쪽지 보내기" 
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={messages[currentConversation].push({message: messageInputValue})}
            // onSend={() => {setMessageInputValue("");}}
            />
            </ChatContainer>
            </MainContainer>
        </div>

    );


}
export default NotePage;