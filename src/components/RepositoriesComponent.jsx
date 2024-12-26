import React, { useState } from "react";
import { Input, Button, List, Tag } from "antd";
import { ReloadOutlined, PlusOutlined } from "@ant-design/icons";

// Sample repository data
const initialRepositories = [
  {
    id: 1,
    name: "design-system",
    language: "React",
    size: "7320 KB",
    visibility: "Public",
    updated: "1 day ago",
  },
  {
    id: 2,
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5871 KB",
    visibility: "Private",
    updated: "2 days ago",
  },
  {
    id: 3,
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    visibility: "Private",
    updated: "5 days ago",
  },
  {
    id: 4,
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    visibility: "Public",
    updated: "3 days ago",
  },
  {
    id: 5,
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    visibility: "Private",
    updated: "6 days ago",
  },
  {
    id: 6,
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    visibility: "Public",
    updated: "4 days ago",
  },
  {
    id: 7,
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    visibility: "Private",
    updated: "7 days ago",
  },
];

const Repositories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repositories, setRepositories] = useState(initialRepositories);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleAddRepository = () => {
    const newRepository = {
      id: repositories.length + 1,
      name: `new-repo-${repositories.length + 1}`,
      language: "Unknown",
      size: "1000 KB",
      visibility: "Private",
      updated: "Just now",
    };
    setRepositories([...repositories, newRepository]);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className=" bg-white rounded-lg border border-divider overflow-x-hidden">
      <div className="py-4 px-6 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary">Repositories</h2>
          <p className="text-sm text-faded">
            {filteredRepositories.length} total repositories
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            type="default"
            icon={<ReloadOutlined />}
            className="text-gray-800"
          >
            Refresh All
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddRepository}
          >
            Add Repository
          </Button>
        </div>
      </div>
      <Input
        placeholder="Search Repositories"
        value={searchTerm}
        onChange={handleSearch}
        className="mx-4 mb-4 w-11/12 lg:w-1/4"
        size="large"
        style={{ borderRadius: "8px" }}
      />
      <List
        itemLayout="horizontal"
        dataSource={filteredRepositories}
        className="max-h-[75vh] overflow-scroll"
        renderItem={(repo) => (
          <List.Item
            className="hover:bg-gray-100 cursor-pointer"
            style={{
              borderTop: "1px solid #f0f0f0",
              paddingLeft: "24px",
            }}
          >
            <List.Item.Meta
              title={
                <div className="flex gap-4 items-center">
                  <div className="font-semibold text-primary text-lg">
                    {repo.name}
                  </div>
                  <Tag color="blue" className="rounded-2xl">
                    {repo.visibility}
                  </Tag>
                </div>
              }
              description={
                <div className="flex gap-4 items-center text-primary">
                  <div>
                    <span className="mr-2">{repo.language}</span>
                    <span className="mr-8 text-blue-700 font-extrabold text-xl">
                      •
                    </span>
                    <span className="mr-8">{repo.size}</span>
                    <span>Updated {repo.updated}</span>
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Repositories;
