import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Modal, Form, Dropdown, Menu } from "antd";
import logo from "../../assets/image/logo.svg";
import AggrementPage from "../../pages/aggrement/AggrementPage";
import PaymentModal from "../client/modal/payment/PaymentModal";
import DonateModal from "../client/modal/donate/DonateModal";
import ArtAntiqModal from "../client/modal/art-antique/ArtAntiqModal";
import DonerDetailsModal from "../client/modal/doner-details/DonerDetailsModal";
import SupportModal from "../client/modal/support-modal/SupportModal";
import DonationFormModal from "../client/donation-form-modal/DonationFormModal";
import LoginForm from "../client/login/LoginFrom";
import useAxiosPublic from "../../pages/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import ProfileCard from "../client/profile-card/ProfileCard";

const Navbar = () => {
  // api and token related function start
  const [profileData, setProfileData] = useState({});
  const [profileCard,setProfileCard] = useState(false);
  const axiosPublic = useAxiosPublic();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token; // 👈 true if token exists

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Bearer added
    },
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authId");
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axiosPublic.get(`/profile`, config);
        if (res.data.success) {
          setProfileData(res.data.data);
        }
      } catch (error) {
        // toast.error(error.response.data.message);
      }
    };
    fetchData();
  }, []);

  // profile card modal 

  const openProfileCardModal = ()=>{
    setProfileCard(true)
  };
  const closeProfileCardModal = ()=>{
    setProfileCard(false)
  }

  // api and token related function start

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // donate modal  terms & conditions. start

  const [termsModal, setTermsModal] = useState(false);

  const termModalCanel = () => {
    setTermsModal(false);
  };

  // donate modal  terms & conditions. end

  // Donate Art, Antique or Collectables modal  terms & conditions. start

  const [donateTerm, setDonateTerm] = useState(false);

  const donateModalCanel = () => {
    setDonateTerm(false);
  };

  // Donate Art, Antique or Collectables modal  terms & conditions. end

  // doner details modal use state

  // doner details modal end

  // support modal useState
  const [supportModal, setSupportModal] = useState(false);
  // payment modal useState
  const [paymentModal, setPaymentModal] = useState(false);
  /* Donate Art, Antiques or Collectible useState   */
  const [antiquesModal, setAntiquesModal] = useState(false);

  // support modal start
  const openSupportModal = () => {
    setSupportModal(true);
    setOpen(false);
  };
  const closeSupportModal = () => {
    setSupportModal(false);
  };

  // support modal end

  const toggleDrawer = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", path: "about" },
    { name: "Service", path: "service" },
    { name: "Fundraising & Get Involved", path: "fundraising-get-involved" },
    { name: "Auction listing & sale", path: "auction" },
    { name: "Contact", path: "contact" },
    { name: "Podcast", path: "podcast" },
  ];

  // login madal start
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      supportModal || paymentModal || antiquesModal || loginModal || profileCard
        ? "hidden"
        : "auto";
  }, [supportModal, paymentModal, antiquesModal, loginModal,profileCard]);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-[#F9F9F9] shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl  mx-auto py-3 flex items-center justify-between px-4 md:px-3">
        {/* Logo */}
        <Link className="flex items-center gap-4" to="/">
          <img src={logo} alt="Virtue Hope Logo" className="h-10" />
          <h1 className="text-2xl font-semibold text-[#263234]">Virtue Hope</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden z-50 lg:flex">
          <ul className="flex items-center gap-x-6 mt-1.5">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "font-bold px-6 py-3 bg-[#dee1e6] rounded-3xl"
                        : "text-[#263234] hover:text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Button (Desktop Only) */}

        <div className="hidden lg:flex bg-white items-center">
          {isLoggedIn ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="profile">
                    <button
                      onClick={openProfileCardModal}
                      className="w-full text-left"
                    >
                      Profile
                    </button>
                  </Menu.Item>
                  <Menu.Item key="logout">
                    <button onClick={handleLogout} className="w-full text-left">
                      Logout
                    </button>
                  </Menu.Item>
                </Menu>
              }
              trigger={["hover"]}
            >
              <div className="cursor-pointer bg-white ">
                <img
                  className="w-10 h-10 object-cover bg-white! rounded-full  "
                  src={`http://137.59.180.219:8000/${
                    profileData?.image || "default-image/defaultImage.jpg"
                  }`}
                  alt="Profile"
                />
              </div>
            </Dropdown>
          ) : (
            <button
              onClick={openLoginModal}
              className="hidden lg:block px-4 py-2.5 text-sm cursor-pointer font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90"
            >
              Login
            </button>
          )}
        </div>

        <button
          onClick={openSupportModal}
          className="hidden lg:block px-4 py-2.5 text-sm cursor-pointer font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90"
        >
          Support Survivors
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="lg:hidden">
          <MenuOutlined className="text-2xl text-[#263234]" />
        </button>

        {/* Ant Design Drawer */}

        <Drawer
          placement="right"
          onClose={toggleDrawer}
          open={open}
          width={260}
          maskClosable
        >
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `text-sm block py-3 px-4 transition-all ${
                      isActive ? "font-bold bg-[#e6dede]" : "text-[#263234]"
                    }`
                  }
                  onClick={toggleDrawer}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login Button in Drawer (Closes Drawer & Opens Modal) */}
          <div className="">
            {isLoggedIn ? (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="profile">
                      <button
                        // onClick={goToProfile}
                        className="w-full text-left"
                      >
                        Profile
                      </button>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left"
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </Menu>
                }
                trigger={["hover"]}
              >
                <div className=" mt-5 items-center gap-1 px-4 py-2.5 text-sm cursor-pointer font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90">
                  Logged In <DownOutlined />
                </div>
              </Dropdown>
            ) : (
              <button
                onClick={openLoginModal}
                className=" mt-5 px-4 py-2.5 text-sm cursor-pointer font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90"
              >
                Login
              </button>
            )}
          </div>

          <button
            onClick={openSupportModal}
            className="mt-6 bg-[#403730] w-full py-3 cursor-pointer text-white rounded-md font-medium text-sm hover:opacity-90"
          >
            Support Survivors
          </button>
        </Drawer>
      </div>

      {/* support modal start  */}

      <Modal
        title={
          <span className=" text-2xl mb-4 text-[#263234] font-semibold leading-8 block ">
            Choose How to Support
          </span>
        }
        open={supportModal}
        footer={null}
        closable={true}
        onCancel={closeSupportModal}
        centered
        width="500px"
        style={{ top: "0px" }}
      >
        <SupportModal
          setPaymentModal={setPaymentModal}
          setSupportModal={setSupportModal}
          setAntiquesModal={setAntiquesModal}
        />
      </Modal>

      {/* support modal end  */}

      {/* Payment Modal start */}

      <Modal
        open={paymentModal}
        footer={null}
        closable={false}
        centered
        width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <PaymentModal
          setPaymentModal={setPaymentModal}
          setSupportModal={setSupportModal}
        />
      </Modal>

      {/* Payment Modal end */}

      {/* Donate Art, Antiques or Collectibles modal start */}

      <Modal
        open={antiquesModal}
        footer={null}
        closable={false}
        centered
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <ArtAntiqModal
          setSupportModal={setSupportModal}
          setAntiquesModal={setAntiquesModal}
          setPaymentModal={setPaymentModal}
          setDonateTerm={setDonateTerm}
        />
      </Modal>

      {/* Donate Art, Antiques or Collectibles modal end */}

      {/* donate modal terms conditions start   */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={termsModal}
          // onOk={handleOk}
          style={{ top: 0 }}
          onCancel={termModalCanel}
          zIndex={1100}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* donate modal terms conditions end   */}

      {/* Donate Art, Antique or Collectables  Terms & Conditions start */}
      <div className=" ">
        <Modal
          width={"70%"}
          open={donateTerm}
          style={{ top: 0 }}
          zIndex={1100}
          onCancel={donateModalCanel}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* Donate Art, Antique or Collectables  Terms & Conditions end */}

      {/* login modal start  */}

      <Modal
        open={loginModal}
        footer={null}
        closable={true}
        onCancel={closeLoginModal}
        centered
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <LoginForm setLoginModal={setLoginModal} loginModal={loginModal} />
      </Modal>

      {/* profile card modal  */}

      <Modal
        open={profileCard}
        onCancel={closeProfileCardModal}
        footer={null}
        centered
        width={400}
        className="rounded-2xl"
      >
        <ProfileCard  setProfileCard = {setProfileCard} profileData = {profileData}  handleLogout = {handleLogout} />
      </Modal>
    </nav>
  );
};
export default Navbar;
