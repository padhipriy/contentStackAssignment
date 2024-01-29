import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Popover, Space,Popconfirm, Input, Dropdown } from 'antd';
import ResizableAntdTable from 'resizable-antd-table';
import InfiniteScroll from "react-infinite-scroll-component";
import nodata from '../src/image/nodata.png';
import filters from '../src/image/filters.png';
import Funnel from '../src/image/Funnel.png';
import GearFix from '../src/image/GearSix.png';
import CaretDown from '../src/image/CaretDown.png';
import DotsThreeVertical from '../src/image/DotsThreeVertical.png';
import { SearchOutlined } from '@ant-design/icons';
import '../src/index.css';
import './App.css';

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const items = [
  {
    label:"1st menu item",
    key: '0',
  },
  {
    label: "2nd menu item",
    key: '1',
  },
 
  {
    label: '3rd menu item',
    key: '3',
  },
];
const App = () => {
  const data = [
    {
      "key":1,
      "title": "The Spanish farmland revolts against Europe's agreement: we are the biggest losers",
      "language": "chinese",
      "contenttype": "Rediector",
      "version": "561",
      "publishstage": "3 Environment",
      "tags": "16 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":2,
      "title": "Lessons and insights from 8 years of Pixelgrade",
      "language": "Hindi",
      "contenttype": "Blog Content",
      "version": "429",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":3,
      "title": "How to build a loyal community online and offline",
      "language": "Polish",
      "contenttype": "Podcasts",
      "version": "883",
      "publishstage": "3 Environment",
      "tags": "3 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":4,
      "title": "Travelling as a way of self-discovery and progress",
      "language": "Dutch",
      "contenttype": "Social Media",
      "version": "600",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":5,
      "title": "Jerzy Buzek: Let's come up with a plan for the energy sector",
      "language": "Danish",
      "contenttype": "Videos",
      "version": "994",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":6,
      "title": "Helping a local business reinvent itself",
      "language": "Portuguese",
      "contenttype": "Rediector",
      "version": "429",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":7,
      "title": "How to choose the right colors when creating a website?",
      "language": "Vietnamese",
      "contenttype": "Landing Page",
      "version": "154",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":8,
      "title": "How to design your site footer like we did",
      "language": "Chinese",
      "contenttype": "Products",
      "version": "453",
      "publishstage": "4 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":9,
      "title": "Starting your traveling blog with Vasco",
      "language": "Hindi",
      "contenttype": "Blog Content",
      "version": "429",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":10,
      "title": "How to choose the right customer for your photo business?",
      "language": "Hindi",
      "contenttype": "Blog Content",
      "version": "429",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    },
    {
      "key":11,
      "title": "Why choose a theme that looks good with WooCommerce",
      "language": "Hindi",
      "contenttype": "Blog Content",
      "version": "429",
      "publishstage": "3 Environment",
      "tags": "0 tags",
      "workflowstages": "Text for chips",
      "modifiedat": "Dec 30, 2019 05:18"
    }
  ];
  
  const [completeData, setCompleteData] = useState(data);
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [showHeader, setShowHeader] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();
 
  const actionContent = (
    <div>
      <Button onClick={(record)=> handleDelete(record.key)}>Delete</Button>
    </div>
  );
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      width: 450,
      ellipsize:true,
      sorter: (a, b) => a.title.length - b.title.length,
      filters: [
        {
          text: ' Vasco',
          value: ' vasco',
        },
        {
          text: 'Spanish',
          value: 'spanish',
        },
        {
          text: 'Jerzy Buzek',
          value: 'jerzybuzek',
        },
      ],
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      filterIcon: () => <div><img src={filters} style={{marginTop: "5px"}} /></div>
    },
    {
      title: 'Language',
      dataIndex: 'language',
      filters: [
        {
          text: 'chinese',
          value: 'chinese',
        },
        {
          text: 'Hindi',
          value: 'Hindi'
        },
        {
          text: 'Polish',
          value: 'Polish'
        },
        {
          text: 'Dutch',
          value: 'Dutch'
        },
        {
          text: 'Danish',
          value: 'Danish'
        },
        {
          text: 'Portuguese',
          value: 'Portuguese'
        },
      ],
      onFilter: (value, record) => record.language.indexOf(value) === 0,
      filterIcon: filtered => <div><img src={filters}  style={{marginTop: "5px"}}/></div>
    },
    {
      title: 'Content Type',
      dataIndex: 'contenttype',
      filters: [
        {
          text: 'Blog Content',
          value: 'Blog Content',
        },
        {
          text: 'Podcasts',
          value: 'Podcasts',
        },
        {
          text: 'Social Media',
          value: 'Social Media',
        },
        {
          text: 'Products',
          value: 'Products',
        },
        {
          text: 'Rediector',
          value: 'Rediector',
        },
        {
          text: 'Landing Page',
          value: 'Landing Page',
        },
        {
          text: 'Videos',
          value: 'Videos',
        },
      ],
      onFilter: (value, record) => record.contenttype.indexOf(value) === 0,
      filterIcon: filtered => <img src={filters} style={{marginTop: "5px"}} />
    },
    {
      title: 'Version',
      dataIndex: 'version',
      filters: [
        {
          text: 561,
          value: 561,
        },
        {
          text: 600,
          value: 600,
        },
        {
          text: 429,
          value: 429,
        },
        {
          text: 994,
          value: 994,
        },
      ],
      onFilter: (value, record) => record.version.indexOf(value) === 0,
      filterIcon: filtered => <img src={filters} style={{marginTop: "5px"}} />
    },
    {
      title: 'Publish Stage',
      dataIndex: 'publishstage',
      filters: [
        {
          text: '3 Environment',
          value: '3 Environment',
        },
        {
          text: '4 Environment',
          value: '4 Environment',
        },
      ],
      onFilter: (value, record) => record.publishstage.indexOf(value) === 0,
      filterIcon: filtered => <img src={filters} style={{marginTop: "5px"}} />
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      filters: [
        {
          text: '16 tags',
          value: '16 tags',
        },
        {
          text: '0 tags',
          value: '0 tags',
        },
        {
          text: '3 tags',
          value: '3 tags',
        },
      ],
      onFilter: (value, record) => record.tags.indexOf(value) === 0,
      filterIcon: filtered => <img src={filters} style={{marginTop: "5px"}} />
    },
    {
      title: 'Workflow Stages',
      dataIndex: 'workflowstages',
      filters: [
        {
          text: 'chips',
          value: 'chips',
        },
        {
          text: 'no-chips',
          value: 'no-chips',
        },
      ],
      onFilter: (value, record) => record.workflowstages.indexOf(value) === 0,
      filterIcon: filtered => <img src={filters} style={{marginTop: "5px"}} />
    },
    {
      title: 'Modified At',
      dataIndex: 'modifiedat',
      filters: [
        {
          text: 'Dec 30',
          value: 'Dec 30',
        },
        {
          text: 'Dec 4',
          value: 'Dec 4',
        },
      ],
      onFilter: (value, record) => record.modifiedat .indexOf(value) === 0,
      filterIcon: filtered => <img src={filters} style={{marginTop: "5px"}} />
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_, record) =>
      completeData.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <div style={{display: "flex",justifyContent: "center",cursor: "pointer"}}>
            <img src={DotsThreeVertical} style={{height:"14px"}}/>
          </div>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleSetCompletedata = () => {
    setTimeout(() => {
        setCompleteData(completeData.concat(...completeData))
    }, 1500);
  };

  const handleDelete = (key) => {
    const newData = completeData.filter((item) => item.key !== key);
    setCompleteData(newData);
  };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    showHeader,
    rowSelection,
    scroll,
    tableLayout,
  };
  let locale = {
    emptyText: <div><img src={nodata} /><h2 style={{color:"#475161",fontSize:"20px",lineHeight:"30px",fontWeight:"600"}}>No Results Found For Your Search Criteria</h2>
    <div style={{color:"#475161",fontSize:"16px",lineHeight:"24px",fontWeight:"400"}}>Don't worry though,we're here to help.Try adjusting your <br/> search terms or check if you misspelled anything</div>
    </div>,
  };

  return (
    <>
      <div className="TopHearderSection">
        <div style={{display:"flex",width:"50%"}}>
          <Input placeholder="Search in Entries..."  />
         <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:"10px"}}>
          Search
        </Button>
        </div>
        <div>
	 <Dropdown
    	menu={{
      	items,
    	}}
    	trigger={['click']}
  	>
   	 <Button icon={<img src={GearFix} style={{height:"12px"}}/>}>Settings</Button>
  	</Dropdown>
    <Dropdown
    	menu={{
      	items,
    	}}
    	trigger={['click']}
  	>
   	<Button icon={<img src={Funnel} style={{height:"12px"}}/>} style={{marginLeft:"10px"}}>Add Filter</Button>
  	</Dropdown>
          
        </div>
       
      </div>

        <ResizableAntdTable
        {...tableProps}
        columns={tableColumns}
        dataSource={hasData ? completeData : []}
        scroll={scroll}
        locale={locale}
        pagination={false}
        bordered
        />
  
    </>
  );
};
export default App;