import IconUser from './icons/IconUser'
import IconHistory from './icons/IconHistory'
import IconFriends from './icons/IconFriends'
import IconMarketplace from './icons/IconMarketplace'
import IconFeed from './icons/IconFeed'
import IconGroup from './icons/IconGorup'

function LeftMenu() {
  return (
    <div className="space-y-2">
      <div className="flex gap-4 items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md">
        <IconUser className="w-6 h-6 text-black opacity-85" />
        My profile
      </div>
      <div className="flex gap-4 items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md">
        <IconFriends className="w-6 h-6 text-black opacity-85" />
        Friends
      </div>
      <div className="flex gap-4 items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md">
        <IconHistory className="w-6 h-6 text-black opacity-85" />
        Stories
      </div>
      <div className="flex gap-4 items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md">
        <IconGroup className="w-6 h-6 text-black opacity-85" />
        Groups
      </div>
      <div className="flex gap-4 items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md">
        <IconMarketplace className="w-6 h-6 text-black opacity-85" />
        Marketplace
      </div>
      <div className="flex gap-4 items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md">
        <IconFeed className="w-6 h-6 text-black opacity-85" />
        Feeds
      </div>
    </div>
  )
}

export default LeftMenu
