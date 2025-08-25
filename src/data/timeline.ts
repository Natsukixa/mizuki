// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: 'education' | 'work' | 'project' | 'achievement';
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: 'website' | 'certificate' | 'project' | 'other';
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: 'current-work',
		title: '职位名称',
		description: '工作职责描述',
		type: 'work',
		startDate: '2023-06-01',
		location: '城市',
		organization: '公司名称',
		position: '职位级别',
		skills: ['技能1', '技能2', '技能3'],
		achievements: [
			'成就描述1',
			'成就描述2',
			'成就描述3'
		],
		icon: 'material-symbols:work',
		color: '#2563EB',
		featured: true
	},
	{
		id: 'project-1',
		title: '项目名称',
		description: '项目描述',
		type: 'project',
		startDate: '2024-01-01',
		endDate: '2024-06-01',
		skills: ['技能1', '技能2', '技能3'],
		achievements: [
			'项目成就1',
			'项目成就2',
			'项目成就3'
		],
		links: [
			{
				name: '项目链接',
				url: 'https://example.com',
				type: 'project'
			}
		],
		icon: 'material-symbols:code',
		color: '#059669',
		featured: true
	},
	{
		id: 'education-1',
		title: '学位名称',
		description: '教育经历描述',
		type: 'education',
		startDate: '2018-09-01',
		endDate: '2022-06-30',
		location: '城市',
		organization: '学校名称',
		skills: ['技能1', '技能2', '技能3'],
		achievements: [
			'学术成就1',
			'学术成就2'
		],
		icon: 'material-symbols:school',
		color: '#059669',
		featured: true
	}
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter(item => item.type === 'education').length,
		work: timelineData.filter(item => item.type === 'work').length,
		project: timelineData.filter(item => item.type === 'project').length,
		achievement: timelineData.filter(item => item.type === 'achievement').length
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === 'all') {
		return timelineData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
	}
	return timelineData
		.filter(item => item.type === type)
		.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter(item => item.featured)
		.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter(item => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter(item => item.type === 'work');
	let totalMonths = 0;

	workItems.forEach(item => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12
	};
};