'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from "@/hooks/use-toast"
import { motion } from 'framer-motion'
import { Mail, Send, Sparkles, Star } from 'lucide-react'
import React, { useState } from 'react'

function Email() {
    const { toast } = useToast();
    const [userEmail, setUserEmail] = useState<string>('');
    const [isHovered, setIsHovered] = useState(false);

    const addToNewsletter = () => {
        if (userEmail === '') {
            toast({
                title: "Please enter your email address",
                description: "We need your email to send you our sacred wisdom.",
                variant: "destructive"
            })
        } else if (!userEmail.includes('@')) {
            toast({
                title: "Invalid email format",
                description: "Please enter a valid email address.",
                variant: "destructive"
            })
        } else {
            toast({
                title: "Welcome to our spiritual journey!",
                description: "You've been successfully added to our newsletter.",
                variant: "default"
            })
            setUserEmail('');
        }
    }

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#B69D74]/5 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#B69D74]/5 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            >
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#B69D74]/10 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-[#B69D74]" />
                            </div>
                            <motion.div
                                animate={{ rotate: isHovered ? 360 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Sparkles className="w-5 h-5 text-[#B69D74]" />
                            </motion.div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Join Our Sacred Journey
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Subscribe to receive ancient wisdom, spiritual insights, and exclusive content 
                            delivered directly to your inbox.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-8">
                            {[
                                'Weekly spiritual guidance',
                                'Exclusive meditation techniques',
                                'Early access to events',
                                'Special ritual instructions'
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <Star className="w-4 h-4 text-[#B69D74]" />
                                    <span className="text-gray-600">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Section */}
                        <div className="relative">
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="flex-1 px-6 py-4 rounded-l-full text-gray-900 bg-gray-50 
                                             border-2 border-r-0 border-gray-100 focus:ring-2 
                                             focus:ring-[#B69D74] focus:border-transparent"
                                />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={addToNewsletter}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className="px-8 rounded-r-full bg-[#B69D74] hover:bg-[#a38a64] 
                                                 text-white font-semibold flex items-center gap-2"
                                    >
                                        Subscribe
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Section */}
                    <div className="hidden lg:block w-1/2 bg-[#344e41] p-12">
                        <div className="h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <motion.div
                                    animate={{ 
                                        rotate: [0, 360],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ 
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="mb-6"
                                >
                                    <Sparkles className="w-16 h-16 text-[#B69D74]" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Embrace the Divine
                                </h3>
                                <p className="text-gray-300">
                                    Start your spiritual journey with us and discover the ancient wisdom 
                                    that awaits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Email;