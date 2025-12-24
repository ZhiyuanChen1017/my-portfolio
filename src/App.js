import React from 'react';

// 1. 导航组件
const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
    <div className="text-xl font-bold text-slate-900">Chen Zhiyuan.</div>
    <ul className="flex space-x-6 text-slate-600">
      <li><a href="#about" className="hover:text-blue-600">关于</a></li>
      <li><a href="#skills" className="hover:text-blue-600">技能</a></li>
      <li><a href="#finance" className="hover:text-blue-600">投资</a></li>
      <li><a href="#contact" className="hover:text-blue-600">联系</a></li>
    </ul>
  </nav>
);

// 2. Hero 组件
const Hero = () => (
  <section className="py-20 px-6 text-center bg-slate-50">
    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
      以数据驱动商业决策<br />
      <span className="text-blue-600">用理性构建财富思维</span>
    </h1>
    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
      我是陈致远，坐标香港。一名专注增长的商业分析师，也是长期主义投资者。
    </p>
    <div className="flex justify-center space-x-4">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        查看作品集
      </button>
      <button className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100">
        我的投资逻辑
      </button>
    </div>
  </section>
);

// 3. 财务追踪组件 (模拟数据)
const FinanceModule = () => {
  const watchList = [
    { symbol: 'VOO (S&P 500)', price: '432.10', change: '+0.85%', isUp: true },
    { symbol: '0700.HK (腾讯)', price: '315.20', change: '-1.20%', isUp: false },
    { symbol: 'BTC-USD', price: '42,100', change: '+2.10%', isUp: true },
  ];

  return (
    <section id="finance" className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Market Watchlist</h2>
        <p className="text-slate-400 mb-8">核心关注标的追踪</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {watchList.map((item, index) => (
            <div key={index} className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="font-mono text-lg text-slate-300">{item.symbol}</h3>
              <div className="flex justify-between items-end mt-4">
                <span className="text-2xl font-bold">{item.price}</span>
                <span className={`text-sm ${item.isUp ? 'text-green-400' : 'text-red-400'}`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. 经历组件
const Experience = () => (
  <section className="py-16 px-6 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-slate-900">经历与履历</h2>
    <div className="border-l-2 border-slate-200 pl-8 space-y-10">
      {/* 示例条目 */}
      <div className="relative">
        <div className="absolute -left-[39px] w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
        <span className="text-sm text-blue-600 font-bold">202X - 至今</span>
        <h3 className="text-xl font-bold mt-1">高级商业分析师</h3>
        <p className="text-slate-500 mb-2">某知名企业 / 香港</p>
        <p className="text-slate-600">
          在此处填写具体的工作内容，例如：利用 Python 进行数据清洗，搭建 PowerBI 自动化看板...
        </p>
      </div>
      {/* 更多条目... */}
    </div>
  </section>
);

// 主页面组合
export default function Portfolio() {
  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <Hero />
      <FinanceModule />
      <Experience />
      {/* 其他组件... */}
    </div>
  );
}