import { Header } from "../../components/UI/Header/Header";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { NavBarItem } from "../../components/UI/NavBarItem/NavBarItem";
import { List } from "../../components/UI/List/List";
import { UserElem } from "../../components/UI/UserElem/UserElem";
import { WhatsNew } from "../../components/UI/WhatsNew/WhatsNew";
import { PostUserElem } from "../../components/UI/PostUserElem/PostUserElem";
import { Text } from "../../components/Typography/Text";
import { Post } from "../../components/UI/Post/Post";
import { Content } from "../../components/UI/ContentPost/ContentPost";
import { PostControls } from "../../components/UI/PostControls/PostControls";
import { CommentBlock } from "../../components/UI/CommentBlock/CommentBlock";
import { More } from "../../components/UI/More/More";
import { PostContainer } from "../../components/UI/PostContainer/PostContainer";
import { PostRepost } from "../../components/UI/PostRepost/PostRepost";
import { Music } from "../../components/UI/Music/Music";
import { ProfileUser } from "../../components/UI/ProfileUser/ProfileUser";
import { Bio } from "../../components/UI/Bio/Bio";
import { FriendsBlock } from "../../components/UI/FriendsBlock/FriendsBlock";
import { Friends } from "../../components/UI/Friends/Friends";
import { UserPosts } from "../../components/UI/UserPosts/UserPosts";
import { ContainerProfile } from "../../components/UI/ContainerProfile/ContainerProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  console.log(user);
  return (
    <Container>
      <Header />
      <ContainerProfile>
        <aside className="LeftSide">
          <nav className="Navbar">
            <ul className="navbar__list">
              <NavBarItem
                name="Моя страница"
                notificationCount={0}
                id="prifole"
                paths={[
                  "M12.5 21.5C9.375 21.5 6.6125 19.9 5 17.5C5.0375 15 10 13.625 12.5 13.625C15 13.625 19.9625 15 20 17.5C19.1736 18.7305 18.0573 19.7389 16.7495 20.4365C15.4416 21.134 13.9823 21.4992 12.5 21.5ZM12.5 3.75C13.4946 3.75 14.4484 4.14509 15.1517 4.84835C15.8549 5.55161 16.25 6.50544 16.25 7.5C16.25 8.49456 15.8549 9.44839 15.1517 10.1517C14.4484 10.8549 13.4946 11.25 12.5 11.25C11.5054 11.25 10.5516 10.8549 9.84835 10.1517C9.14509 9.44839 8.75 8.49456 8.75 7.5C8.75 6.50544 9.14509 5.55161 9.84835 4.84835C10.5516 4.14509 11.5054 3.75 12.5 3.75ZM12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 5.5875 19.375 0 12.5 0Z",
                ]}
                iconName="icon icon-profile"
              />
              <NavBarItem
                name="Новости"
                notificationCount={0}
                id="news"
                paths={[
                  "M23.1208 5H22.0042L22.0012 5.00141L22 5.00482V21.2857C22 21.7404 22.158 22.1764 22.4393 22.4979C22.7206 22.8194 23.1022 23 23.5 23C23.8978 23 24.2794 22.8194 24.5607 22.4979C24.842 22.1764 25 21.7404 25 21.2857V7.14768C25 6.57808 24.802 6.03181 24.4496 5.62904C24.0972 5.22627 23.6192 5 23.1208 5Z",
                  "M19.36 21.4286V2.23214C19.36 1.93901 19.3031 1.64875 19.1925 1.37794C19.082 1.10712 18.9199 0.861053 18.7156 0.653779C18.5113 0.446506 18.2688 0.282087 18.0019 0.169912C17.735 0.0577361 17.4489 0 17.16 0H2.2C1.61652 0 1.05695 0.235171 0.644365 0.653779C0.231785 1.07239 0 1.64014 0 2.23214V21.875C0 22.7038 0.324499 23.4987 0.902111 24.0847C1.47972 24.6708 2.26313 25 3.08 25H21.9367C21.9451 25.0001 21.9533 24.9985 21.961 24.9953C21.9687 24.9921 21.9757 24.9873 21.9816 24.9814C21.9875 24.9754 21.9922 24.9683 21.9953 24.9605C21.9985 24.9527 22.0001 24.9443 22 24.9358C22 24.9218 21.9954 24.9082 21.9869 24.8971C21.9785 24.886 21.9666 24.878 21.9532 24.8744C21.2088 24.6673 20.552 24.2179 20.0836 23.5955C19.6151 22.973 19.3609 22.2118 19.36 21.4286ZM3.52 5.35714C3.52 5.12034 3.61271 4.89324 3.77775 4.7258C3.94278 4.55835 4.16661 4.46429 4.4 4.46429H7.92C8.15339 4.46429 8.37722 4.55835 8.54225 4.7258C8.70729 4.89324 8.8 5.12034 8.8 5.35714V8.92857C8.8 9.16537 8.70729 9.39247 8.54225 9.55992C8.37722 9.72736 8.15339 9.82143 7.92 9.82143H4.4C4.16661 9.82143 3.94278 9.72736 3.77775 9.55992C3.61271 9.39247 3.52 9.16537 3.52 8.92857V5.35714ZM14.96 20.5357H4.42475C3.9512 20.5357 3.54475 20.1663 3.5211 19.6858C3.51537 19.5651 3.53385 19.4445 3.57543 19.3312C3.61701 19.2179 3.68082 19.1144 3.763 19.0269C3.84518 18.9394 3.94401 18.8698 4.0535 18.8222C4.163 18.7746 4.28088 18.75 4.4 18.75H14.9352C15.4088 18.75 15.8152 19.1194 15.8389 19.5999C15.8446 19.7206 15.8261 19.8413 15.7846 19.9545C15.743 20.0678 15.6792 20.1713 15.597 20.2588C15.5148 20.3463 15.416 20.416 15.3065 20.4636C15.197 20.5112 15.0791 20.5357 14.96 20.5357ZM14.96 16.9643H4.42475C3.9512 16.9643 3.54475 16.5949 3.5211 16.1144C3.51537 15.9937 3.53385 15.873 3.57543 15.7598C3.61701 15.6465 3.68082 15.543 3.763 15.4555C3.84518 15.368 3.94401 15.2983 4.0535 15.2507C4.163 15.2031 4.28088 15.1786 4.4 15.1786H14.9352C15.4088 15.1786 15.8152 15.548 15.8389 16.0285C15.8446 16.1492 15.8261 16.2698 15.7846 16.3831C15.743 16.4963 15.6792 16.5999 15.597 16.6874C15.5148 16.7749 15.416 16.8445 15.3065 16.8921C15.197 16.9397 15.0791 16.9643 14.96 16.9643ZM14.96 13.3929H4.42475C3.9512 13.3929 3.54475 13.0234 3.5211 12.543C3.51537 12.4222 3.53385 12.3016 3.57543 12.1883C3.61701 12.0751 3.68082 11.9716 3.763 11.8841C3.84518 11.7966 3.94401 11.7269 4.0535 11.6793C4.163 11.6317 4.28088 11.6072 4.4 11.6071H14.9352C15.4088 11.6071 15.8152 11.9766 15.8389 12.457C15.8446 12.5778 15.8261 12.6984 15.7846 12.8117C15.743 12.9249 15.6792 13.0284 15.597 13.1159C15.5148 13.2034 15.416 13.2731 15.3065 13.3207C15.197 13.3683 15.0791 13.3928 14.96 13.3929ZM14.96 9.82143H11.4647C10.9912 9.82143 10.5847 9.45201 10.5611 8.97154C10.5554 8.85082 10.5739 8.73017 10.6154 8.61691C10.657 8.50365 10.7208 8.40013 10.803 8.31263C10.8852 8.22514 10.984 8.15548 11.0935 8.10787C11.203 8.06027 11.3209 8.03572 11.44 8.03571H14.9352C15.4088 8.03571 15.8152 8.40513 15.8389 8.8856C15.8446 9.00632 15.8261 9.12697 15.7846 9.24023C15.743 9.35349 15.6792 9.45701 15.597 9.54451C15.5148 9.63201 15.416 9.70167 15.3065 9.74927C15.197 9.79687 15.0791 9.82142 14.96 9.82143ZM14.96 6.25H11.4647C10.9912 6.25 10.5847 5.88058 10.5611 5.40011C10.5554 5.27939 10.5739 5.15874 10.6154 5.04548C10.657 4.93222 10.7208 4.8287 10.803 4.74121C10.8852 4.65371 10.984 4.58405 11.0935 4.53645C11.203 4.48885 11.3209 4.4643 11.44 4.46429H14.9352C15.4088 4.46429 15.8152 4.8337 15.8389 5.31417C15.8446 5.4349 15.8261 5.55554 15.7846 5.6688C15.743 5.78206 15.6792 5.88558 15.597 5.97308C15.5148 6.06058 15.416 6.13024 15.3065 6.17784C15.197 6.22544 15.0791 6.24999 14.96 6.25Z",
                ]}
                iconName="icon icon-news"
              />
              <NavBarItem
                name="Чаты"
                notificationCount={0}
                id="chat"
                paths={[
                  "M7.80602 0.935056C18.5451 -3.38192 29.1413 8.06868 23.3711 18.4999C20.7497 23.2374 14.2384 27.0528 6.6562 23.4445L1.38542 24.9567C0.567935 25.1912 -0.188051 24.4351 0.0417887 23.6135C0.35611 22.4869 1.10154 19.8306 1.53761 18.3907C-1.73108 12.5341 0.473514 3.88208 7.80602 0.935056ZM7.47058 10.1673C7.47058 10.5977 7.81844 10.9471 8.24706 10.9471H16.6356C16.8415 10.9471 17.039 10.8649 17.1846 10.7187C17.3303 10.5724 17.4121 10.3741 17.4121 10.1673C17.4121 9.96046 17.3303 9.76211 17.1846 9.61587C17.039 9.46963 16.8415 9.38747 16.6356 9.38747H8.24706C7.81844 9.38747 7.47058 9.73682 7.47058 10.1673ZM8.24955 14.0501C8.04361 14.0501 7.84611 14.1322 7.70049 14.2785C7.55487 14.4247 7.47306 14.623 7.47306 14.8299C7.47306 15.0367 7.55487 15.235 7.70049 15.3813C7.84611 15.5275 8.04361 15.6097 8.24955 15.6097H14.1508C14.3568 15.6097 14.5543 15.5275 14.6999 15.3813C14.8455 15.235 14.9273 15.0367 14.9273 14.8299C14.9273 14.623 14.8455 14.4247 14.6999 14.2785C14.5543 14.1322 14.3568 14.0501 14.1508 14.0501H8.24955Z",
                ]}
                iconName="icon icon-chat"
              />
              <NavBarItem
                name="Друзья"
                notificationCount={0}
                id="ftiends"
                paths={[
                  "M8.7 11.7647C10.2383 11.7647 11.7135 11.145 12.8012 10.0418C13.8889 8.93865 14.5 7.44245 14.5 5.88235C14.5 4.32226 13.8889 2.82606 12.8012 1.7229C11.7135 0.619746 10.2383 0 8.7 0C7.16174 0 5.68649 0.619746 4.59878 1.7229C3.51107 2.82606 2.9 4.32226 2.9 5.88235C2.9 7.44245 3.51107 8.93865 4.59878 10.0418C5.68649 11.145 7.16174 11.7647 8.7 11.7647ZM21.75 11.7647C22.9037 11.7647 24.0101 11.2999 24.8259 10.4725C25.6417 9.64516 26.1 8.52301 26.1 7.35294C26.1 6.18287 25.6417 5.06072 24.8259 4.23335C24.0101 3.40599 22.9037 2.94118 21.75 2.94118C20.5963 2.94118 19.4899 3.40599 18.6741 4.23335C17.8583 5.06072 17.4 6.18287 17.4 7.35294C17.4 8.52301 17.8583 9.64516 18.6741 10.4725C19.4899 11.2999 20.5963 11.7647 21.75 11.7647ZM3.2625 14.7059C2.39723 14.7059 1.5674 15.0545 0.955564 15.675C0.343727 16.2955 0 17.1372 0 18.0147V18.3824C0 18.3824 0 25 8.7 25C17.4 25 17.4 18.3824 17.4 18.3824V18.0147C17.4 17.1372 17.0563 16.2955 16.4444 15.675C15.8326 15.0545 15.0028 14.7059 14.1375 14.7059H3.2625ZM21.75 22.7941C20.0521 22.7941 18.7514 22.5279 17.7553 22.1206C18.335 21.1282 18.6988 20.0216 18.8225 18.875C18.8366 18.7357 18.8458 18.5959 18.85 18.4559V18.0147C18.8518 16.7827 18.3831 15.5978 17.5421 14.7088C17.5914 14.7067 17.6407 14.7058 17.69 14.7059H25.81C26.656 14.7059 27.4674 15.0467 28.0657 15.6535C28.6639 16.2602 29 17.0831 29 17.9412C29 17.9412 29 22.7941 21.75 22.7941Z",
                ]}
                iconName="icon icon-friends"
              />
              <NavBarItem
                name="Группы"
                notificationCount={0}
                id="group"
                paths={[
                  "M18.875 16.6595C20.002 16.6595 20.9167 17.5925 20.9167 18.742V21.1243L20.9073 21.2528C20.5457 23.7839 18.3173 25 14.5782 25C10.853 25 8.5885 23.7981 8.09967 21.2968L8.08333 21.1219V18.742C8.08333 17.5925 8.998 16.6595 10.125 16.6595H18.875ZM19.4513 9.51973H26.4583C27.5853 9.51973 28.5 10.4527 28.5 11.6022V13.9845L28.4907 14.113C28.129 16.6441 25.9007 17.8602 22.1615 17.8602L21.9655 17.8578C21.7857 17.2057 21.4119 16.6264 20.8958 16.2C20.3797 15.7735 19.7466 15.5208 19.0838 15.4767L18.875 15.4696H17.7993C18.409 14.9682 18.9007 14.3338 19.2382 13.613C19.5758 12.8922 19.7507 12.1035 19.75 11.3047C19.75 10.6788 19.645 10.079 19.4513 9.51973ZM2.54167 9.51973H9.54867C9.355 10.079 9.25 10.6788 9.25 11.3047C9.25 12.8873 9.92433 14.3117 10.9953 15.2911L11.2007 15.4696H10.125C8.65267 15.4696 7.41133 16.481 7.03333 17.8614L6.99483 17.8602C3.26967 17.8602 1.00517 16.6583 0.516333 14.157L0.5 13.9821V11.6022C0.5 10.4527 1.41467 9.51973 2.54167 9.51973ZM14.5 7.1398C15.583 7.1398 16.6216 7.5786 17.3874 8.35966C18.1531 9.14073 18.5833 10.2001 18.5833 11.3047C18.5833 12.4093 18.1531 13.4686 17.3874 14.2497C16.6216 15.0308 15.583 15.4696 14.5 15.4696C13.417 15.4696 12.3784 15.0308 11.6126 14.2497C10.8469 13.4686 10.4167 12.4093 10.4167 11.3047C10.4167 10.2001 10.8469 9.14073 11.6126 8.35966C12.3784 7.5786 13.417 7.1398 14.5 7.1398ZM22.0833 0C23.1663 0 24.2049 0.438799 24.9707 1.21987C25.7365 2.00093 26.1667 3.06029 26.1667 4.16488C26.1667 5.26948 25.7365 6.32883 24.9707 7.1099C24.2049 7.89096 23.1663 8.32976 22.0833 8.32976C21.0004 8.32976 19.9618 7.89096 19.196 7.1099C18.4302 6.32883 18 5.26948 18 4.16488C18 3.06029 18.4302 2.00093 19.196 1.21987C19.9618 0.438799 21.0004 0 22.0833 0ZM6.91667 0C7.99963 0 9.03825 0.438799 9.80402 1.21987C10.5698 2.00093 11 3.06029 11 4.16488C11 5.26948 10.5698 6.32883 9.80402 7.1099C9.03825 7.89096 7.99963 8.32976 6.91667 8.32976C5.8337 8.32976 4.79509 7.89096 4.02931 7.1099C3.26354 6.32883 2.83333 5.26948 2.83333 4.16488C2.83333 3.06029 3.26354 2.00093 4.02931 1.21987C4.79509 0.438799 5.8337 0 6.91667 0Z",
                ]}
                iconName="icon icon-group"
              />
              <NavBarItem
                name="Фотографии"
                notificationCount={0}
                id="photo"
                paths={[
                  "M25 17.5V2.5C25 1.125 23.875 0 22.5 0H7.5C6.125 0 5 1.125 5 2.5V17.5C5 18.875 6.125 20 7.5 20H22.5C23.875 20 25 18.875 25 17.5ZM11.25 12.5L13.7875 15.8875L17.5 11.25L22.5 17.5H7.5L11.25 12.5ZM0 5V22.5C0 23.875 1.125 25 2.5 25H20V22.5H2.5V5H0Z",
                ]}
                iconName="icon icon-photo"
              />
              <NavBarItem
                name="Видео"
                notificationCount={0}
                id="video"
                paths={[
                  "M13.8125 14.375L19 11.0625C19.3958 10.8125 19.5937 10.4583 19.5937 10C19.5937 9.54167 19.3958 9.1875 19 8.9375L13.8125 5.625C13.3958 5.33333 12.9687 5.3125 12.5312 5.5625C12.0937 5.8125 11.875 6.17708 11.875 6.65625V13.3437C11.875 13.8229 12.0937 14.1875 12.5312 14.4375C12.9687 14.6875 13.3958 14.6667 13.8125 14.375ZM7.5 20C6.8125 20 6.22375 19.755 5.73375 19.265C5.24375 18.775 4.99917 18.1867 5 17.5V2.5C5 1.8125 5.245 1.22375 5.735 0.733752C6.225 0.243752 6.81333 -0.000831211 7.5 2.12224e-06H22.5C23.1875 2.12224e-06 23.7762 0.245002 24.2662 0.735002C24.7562 1.225 25.0008 1.81333 25 2.5V17.5C25 18.1875 24.755 18.7762 24.265 19.2662C23.775 19.7562 23.1867 20.0008 22.5 20H7.5ZM2.5 25C1.8125 25 1.22375 24.755 0.733752 24.265C0.243752 23.775 -0.000831211 23.1867 2.12224e-06 22.5V6.25C2.12224e-06 5.89583 0.120002 5.59875 0.360002 5.35875C0.600002 5.11875 0.896669 4.99917 1.25 5C1.60417 5 1.90125 5.12 2.14125 5.36C2.38125 5.6 2.50083 5.89667 2.5 6.25V22.5H18.75C19.1042 22.5 19.4012 22.62 19.6412 22.86C19.8812 23.1 20.0008 23.3967 20 23.75C20 24.1042 19.88 24.4012 19.64 24.6412C19.4 24.8812 19.1033 25.0008 18.75 25H2.5Z",
                ]}
                iconName="icon icon-video"
              />
              <NavBarItem
                name="Музыка"
                notificationCount={0}
                id="music"
                paths={[
                  "M13.8125 14.375L19 11.0625C19.3958 10.8125 19.5937 10.4583 19.5937 10C19.5937 9.54167 19.3958 9.1875 19 8.9375L13.8125 5.625C13.3958 5.33333 12.9687 5.3125 12.5312 5.5625C12.0937 5.8125 11.875 6.17708 11.875 6.65625V13.3437C11.875 13.8229 12.0937 14.1875 12.5312 14.4375C12.9687 14.6875 13.3958 14.6667 13.8125 14.375ZM7.5 20C6.8125 20 6.22375 19.755 5.73375 19.265C5.24375 18.775 4.99917 18.1867 5 17.5V2.5C5 1.8125 5.245 1.22375 5.735 0.733752C6.225 0.243752 6.81333 -0.000831211 7.5 2.12224e-06H22.5C23.1875 2.12224e-06 23.7762 0.245002 24.2662 0.735002C24.7562 1.225 25.0008 1.81333 25 2.5V17.5C25 18.1875 24.755 18.7762 24.265 19.2662C23.775 19.7562 23.1867 20.0008 22.5 20H7.5ZM2.5 25C1.8125 25 1.22375 24.755 0.733752 24.265C0.243752 23.775 -0.000831211 23.1867 2.12224e-06 22.5V6.25C2.12224e-06 5.89583 0.120002 5.59875 0.360002 5.35875C0.600002 5.11875 0.896669 4.99917 1.25 5C1.60417 5 1.90125 5.12 2.14125 5.36C2.38125 5.6 2.50083 5.89667 2.5 6.25V22.5H18.75C19.1042 22.5 19.4012 22.62 19.6412 22.86C19.8812 23.1 20.0008 23.3967 20 23.75C20 24.1042 19.88 24.4012 19.64 24.6412C19.4 24.8812 19.1033 25.0008 18.75 25H2.5Z",
                ]}
                iconName="icon icon-music-playlist"
              />
              <NavBarItem
                name="Сохраненное"
                notificationCount={0}
                id="mark"
                paths={[
                  "M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z",
                ]}
                iconName="icon icon-mark"
              />
              <NavBarItem
                name="Другое"
                notificationCount={0}
                id="other"
                paths={[
                  "M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM6.00481 10.75L12.5 16L18.9952 10.75H6.00481Z",
                ]}
                iconName="icon icon-other"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </ul>
          </nav>
          <List title="Подписки" count={0}>
            <UserElem
              imgSrc="public/img/users/katarina-fisher.jpeg"
              mainText="N E W"
              secondaryText="Развитие"
              badgeCount={0}
            />

            <UserElem
              imgSrc="public/img/users/gleb.jpeg"
              mainText="Aesthetics"
              secondaryText="Стиль"
              badgeCount={0}
            />
            <UserElem
              imgSrc="public/img/users/sofia-kodra.jpeg"
              mainText="дом твоей эстетики"
              secondaryText="Творчество"
              badgeCount={0}
            />
            <UserElem
              imgSrc="public/img/users/mark-krahmalev.jpeg"
              mainText="wailet"
              secondaryText="Искусство"
              badgeCount={0}
            />
            <UserElem
              imgSrc="public/img/users/denis-frolov.jpeg"
              mainText="A W E S O M E"
              secondaryText="Стиль"
              badgeCount={0}
            />

            <UserElem
              imgSrc="public/img/users/darya-gertner.jpeg"
              mainText="minimalism"
              secondaryText="Фотография"
              badgeCount={0}
            />
            <UserElem
              imgSrc="public/img/users/arina-volkova.jpeg"
              mainText="Словарный запасE"
              secondaryText="Литература"
              badgeCount={0}
            />
            <UserElem
              imgSrc="public/img/users/diana-sozinova.jpeg"
              mainText="Look"
              secondaryText="Мода"
              badgeCount={0}
            />
          </List>
        </aside>

        <ProfileUser
          userImg="public/img/users/andrey-kashirskiy.jpeg"
          userAlt="userPhpto"
          userName={user?.name || "Имя пользователя"}
          countFriends={0}
          countSubscribers={0}
          countSubscriptions={0}
        />

        <main className="Main">
          <WhatsNew
            imgSrc="public/img/users/andrey-kashirskiy.jpeg"
            placeholder="Что у вас нового?"
          />
          <UserPosts>
            <Post>
              <Content src="public/img/users/andrey-kashirskiy.jpeg" alt="Post Item" />
              <Content src="public/img/post/user-photo-6.jpeg" alt="Post Item" />
              <Content src="public/img/post/nature-3.png" alt="Post Item" />
              <Content src="public/img/post/video-poster.jpeg" alt="Post Item" />
              <Content src="public/img/post/user-photo-2.jpeg" alt="Post Item" />
              <Content src="public/img/post/girl-1.jpeg" alt="Post Item" />
            </Post>
          </UserPosts>

          <PostContainer>
            <PostUserElem
              imgSrc="public/img/users/aleksandr-maykov.jpeg"
              alt="User"
              href="#"
              hrefText="Александр Майков"
              time="Сегодня 00:00"
            />

            <Text headingText="Момент умиротворения и спокойствия" />

            <Post>
              <Content src="public/img/profile/profile-img-1.jpeg" alt="Post Item" />
            </Post>

            <PostControls likesCount={0} commentsCount={0} />

            <CommentBlock
              userImage="public/img/users/katarina-fisher.jpeg"
              userName="Карина Савина"
              commentText="000"
              replyLink="#"
              href="#"
              date="0 марта"
            />

            <More/>
          </PostContainer>

          <PostContainer>
            <PostUserElem
              imgSrc="public/img/users/gleb.jpeg"
              alt="User"
              href="#"
              hrefText="Марк Крахмалев"
              time="20 марта 23:31"
            />
            <PostRepost>
              <PostUserElem
                imgSrc="public/img/users/andrey-kashirskiy.jpeg"
                alt="User"
                href="#"
                hrefText="Александр Майков"
                time="Сегодня 00:00"
              />
              <Post>
                <Content src="public/img/post/garnet-man.png" alt="Post Item" />
                <Content src="./img/post/garnet.png" alt="Post Item" />
              </Post>
            </PostRepost>

            <PostControls likesCount={0} commentsCount={0} />

            <CommentBlock
              userImage="public/img/users/arina-volkova.jpeg"
              userName="Карина Савина"
              commentText="000"
              replyLink="#"
              href="#"
              date="0 марта"
            />

            <More />
          </PostContainer>
        </main>
        <aside className="RightSide">
          <Bio
            dataUser="0 марта"
            cityUser="0 марта"
            statusUser="0 марта"
            pUser="0 марта"
            activityUser="0 марта"
            hobbyUser="0 марта"
          />
          <FriendsBlock friends={0}>
            <Friends
              friendPhoto="public/img/users/arina-volkova.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/darya-gertner.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/denis-frolov.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/diana-sozinova.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/gleb.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/katarina-fisher.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/mark-krahmalev.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/sofia-kodra.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
            <Friends
              friendPhoto="public/img/users/viktoria.jpeg"
              friendAlt="0 марта"
              friendName="o_Ó"
            />
          </FriendsBlock>

          <List title="Вы недавно слушали" count={0}>
            <Music
              imgSrc="public/img/music/album-1.png"
              mainText="Pieces"
              secondaryText="Andrew Belle"
              isActive={true}
            />
            <Music
              imgSrc="public/img/music/album-2.png"
              mainText="In the Wind"
              secondaryText="On-The-Go"
              isActive={false}
            />
            <Music
              imgSrc="public/img/music/album-3.png"
              mainText="On you own"
              secondaryText="Meltt"
              isActive={true}
            />
            <Music
              imgSrc="public/img/music/album-4.png"
              mainText="Infinity"
              secondaryText="James Young"
              isActive={false}
            />
            <Music
              imgSrc="public/img/music/album-5.png"
              mainText="Let me follow"
              secondaryText="Son Lux"
              isActive={true}
            />
            <Music
              imgSrc="public/img/music/album-6.png"
              mainText="Youth"
              secondaryText="Glass Animals"
              isActive={false}
            />
          </List>
        </aside>
      </ContainerProfile>
    </Container>
  );
};