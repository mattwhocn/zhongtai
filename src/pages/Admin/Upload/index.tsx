import React, { useState } from 'react';
import { Layout, Upload, Button, message, Card, Space } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { usePageTitle } from '../../../hooks/usePageTitle';
import './style.less';

const { Content } = Layout;
const { Dragger } = Upload;

const AdminUpload: React.FC = () => {
  usePageTitle('文件上传');
  const [uploading, setUploading] = useState(false);

  const uploadProps: UploadProps = {
    name: 'file',
    action: 'http://localhost:3000/api/upload',
    accept: '.xlsx,.xls',
    maxCount: 1,
    showUploadList: true,
    onChange(info) {
      if (info.file.status === 'uploading') {
        setUploading(true);
      }
      if (info.file.status === 'done') {
        setUploading(false);
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        setUploading(false);
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  const handleDownloadTemplate = () => {
    // 这里替换为实际的模板文件下载地址
    window.location.href = 'http://localhost:3000/api/template';
  };

  // 临时登录方法，实际项目中应该有专门的登录页面
  const handleLogin = () => {
    localStorage.setItem('admin_token', 'your_secure_token');
    window.location.reload();
  };

  return (
    <Content className="admin-upload-page">
      <Card title="文件上传管理" className="upload-card">
        {!localStorage.getItem('admin_token') && (
          <Button onClick={handleLogin} style={{ marginBottom: 16 }}>
            临时登录
          </Button>
        )}
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Button 
            icon={<DownloadOutlined />}
            onClick={handleDownloadTemplate}
            type="primary"
            ghost
          >
            下载模板
          </Button>

          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
            <p className="ant-upload-hint">
              支持 .xlsx, .xls 格式的 Excel 文件
            </p>
          </Dragger>
        </Space>
      </Card>
    </Content>
  );
};

export default AdminUpload; 