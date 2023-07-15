import React, { useState }  from 'react'
import { CloudArrowUpIcon, LockClosedIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/20/solid'



export default function HomeComponents() {

    const features = [
        {
          name: 'Push to Cloud.',
          description:
            'Gain real-time insights on your shared docs with document tracking. See how much time they spent, how often they came back, and more.',
          icon: CloudArrowUpIcon,
        },
        {
          name: 'Pipeline Document.',
          description: 'Documents & projects can be moved to different workspaces allowing teams to easily share and store knowledge without complicated sharing permission levels.',
          icon: DocumentMagnifyingGlassIcon,
        },
        {
          name: 'SSL certificates.',
          description: 'Share your documents via trackable links to understand how users are interacting with them. Add lead capture forms, password protection, automatic destruction, and more.',
          icon: LockClosedIcon,
        },
      ]

  return (

    /* Hero Section */
      <div className="overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Tracking Your Document</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get the right document management system</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              The dashboard feature shows you insights into your team’s pipeline.
              It has tiles that show recent documents that are sorted by their current status: draft, for approval, sent, viewed, and more.
              </p>
              <dl className="mt-8 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>

    )
}
