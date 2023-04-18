import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from 'shared/components';
const { Content } = Layout;
const NoLefMenuLayout = () => {
  return (
    <Layout
      className="site-layout"
      style={{
        height: '100%',
      }}
    >
      <Header showIntro />
      <Content
        style={{
          overflow: 'initial',
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};
export default NoLefMenuLayout;
